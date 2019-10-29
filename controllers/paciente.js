const db = require('../database/config');
const bcrypt = require('bcrypt');
const { capitalize } = require('../utils/tools')

class PacienteController{
    //Listar Pacientes
    getPacientes = async (req, res, next) => {
        try {
            let limit = req.body['limit'] || 1000;
            let offset = req.body['offset'] || 0;
            const pacientes = await db.query("SELECT id, nombre, apellido, documento, telefono FROM pacientes ORDER BY apellido ASC LIMIT $1 OFFSET $2", [limit, offset]);
            res.json(pacientes.rows);
        } catch (error) {
            return next(error);
        }
    }
    
    
    //Lista Paciente por id
    getPacienteById = async (req, res, next) => {
        try {
            const id = req.params.id;
            const {rows: [paciente]} = await db.query('SELECT * FROM pacientes WHERE id = $1',[id]);
            const {rows: [usuario]} = await db.query('SELECT * FROM usuarios WHERE id = $1', [paciente.id_usuario]);
            const {rows: [obraSocialPaciente]} = await db.query('SELECT * FROM obras_sociales_pacientes WHERE id_paciente = $1 AND activo = TRUE',[id]);
            const {rows: [obraSocial]} = await db.query('SELECT * FROM obras_sociales WHERE id = $1',[obraSocialPaciente.id_obra_social]);
            res.json({
                id_paciente: paciente.id,
                nombre: paciente.nombre,
                apellido: paciente.apellido,
                email: usuario.email,
                fecha_nacimiento: paciente.fecha_nacimiento,
                documento: paciente.documento,
                direccion: paciente.direccion,
                id_usuario: paciente.id_usuario,
                numero_afiliado: obraSocialPaciente.numero_afiliado,
                id_obra_social: obraSocial.id,
                obra_social:  obraSocial.nombre,
                username: usuario.username
            });
        } catch (error) {
            next(error);
        }
    }
    
    //Agregar Paciente
    createPaciente = async (req, res, next) => {
        try {
            const { fecha_nacimiento, telefono, direccion, documento, doc_numero, email, id_obra_social, numero_afiliado } = req.body;
            const nombre   = capitalize(req.body.nombre);
            const apellido = capitalize(req.body.apellido);
            if( nombre.length == 0 ||
                apellido.length == 0 ||
                fecha_nacimiento.length == 0 ||
                direccion.length == 0 ||
                documento.length == 0 ||
                doc_numero.length == 0 ||
                email.length == 0 ||
                (id_obra_social.length == 0 && numero_afiliado)
            ){
                res.json({
                    "status": "ERROR",
                    "msg": "Faltan datos requeridos"
                });
                return;
            }
            const username = `${apellido.toLowerCase()}_${nombre.toLowerCase()}`;
            const password = bcrypt.hashSync(doc_numero, 10);
    
            const usuario = await db.query('INSERT INTO usuarios (username, password, email, id_rol) VALUES ($1,$2,$3,$4) RETURNING *', [username, password, email, 3]);
            const id_usuario = usuario.rows[0].id;
    
            const paciente = await db.query('INSERT INTO pacientes (nombre,apellido,fecha_nacimiento,direccion,documento,id_usuario) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *', [nombre, apellido, fecha_nacimiento, direccion, documento, id_usuario,telefono]);
            const id_paciente = paciente.rows[0].id;
    
            const obra_social_paciente = await db.query('INSERT INTO obras_sociales_pacientes (id_obra_social, id_paciente, numero_afiliado, activo) VALUES ($1,$2,$3,$4) RETURNING *', [id_obra_social, id_paciente, numero_afiliado, true]);
            const obra_social = obra_social_paciente.rows[0].nombre;
    
            console.log("data : ", { // Este dato podría borrarse o utilizarse para renderizar PacienteInfo después de agregar el paciente
                apellido,
                direccion,
                documento,
                email,
                fecha_nacimiento,
                telefono,
                id_obra_social,
                id_paciente,
                id_usuario,
                nombre,
                numero_afiliado,
                obra_social,
                username,
                
            });
    
            res.json({
                "status": "OK",
                "id_paciente": id_paciente
            });
        } catch (error) {
            next(error);
        };
    };
    
    //Actualizar Paciente
    updatePaciente = async (req, res, next) => {
        try {
            const { id: id_paciente } = req.params;
            const { 
                nombre,
                apellido,
                fecha_nacimiento,
                direccion,
                documento,
                telefono,
                email,
                id_obra_social,
                numero_afiliado
            } = req.body;
            const is_update_paciente = await db.query(
                `UPDATE pacientes set ${[
                    `nombre = $1`,
                    `apellido = $2`,
                    `direccion = $3`,
                    `documento = $4`,
                    `fecha_nacimiento = $5`,
                    `telefono = $6`
                ].toString()} WHERE id = $7`,
                [
                    nombre,
                    apellido,
                    direccion,
                    documento,
                    fecha_nacimiento,
                    telefono,
                    id_paciente
                ]
            );
            const { id_usuario } = await db.query('SELECT id_usuario FROM pacientes WHERE ID = $1 LIMIT 1',[id_paciente]);
            const is_update_usuario = await db.query(
                `UPDATE usuarios set email = $1 WHERE id = $2`,
                [
                    email,
                    id_usuario
                ]
            );
            const obras_sociales_paciente = await db.query(
                [
                    `SELECT * FROM obras_sociales_pacientes`,
                        `WHERE id_paciente = $1 AND id_obra_social = $2 AND activo=TRUE`
                ].join(" "),
                [
                    id_paciente,
                    id_obra_social
                ]
            );
    
            let is_inserted_osp = 0;
            if(obras_sociales_paciente){
                const {id: id_obra_social_paciente} = obras_sociales_paciente[0];
                is_inserted_osp = await db.query(
                    [
                        `UPDATE obras_sociales_pacientes SET numero_afiliado = $1`,
                        `WHERE id = $2`
                    ].join(" "),
                    [
                        numero_afiliado,
                        id_obra_social_paciente
                    ]
                );
            } else {
                const affected = await db.query(
                    [
                        `UPDATE obras_sociales_pacientes SET activo=FALSE`,
                        `WHERE id_paciente = $1`
                    ].join(" "),
                    [
                        id_paciente
                    ]
                );
                console.log(affected);
                is_inserted_osp = await db.query(
                    [
                        `INSERT INTO obras_sociales_pacientes`,
                            `(id_obra_social, id_paciente, numero_afiliado, activo)`,
                            `VALUES ($1,$2,$3,$4)`
                    ].join(" "),
                    [
                        id_obra_social,
                        id_paciente,
                        numero_afiliado,
                        true
                    ]
                );
            }
            if(is_update_paciente && is_update_usuario && is_inserted_osp){
                this.getPacienteById(req, res, next);
            } else {
                res.status(400).json("Error al actualizar");
            }
        } catch (error) {
            next(error);
        }
    };
    
    //Borrar Paciente
    deletePaciente = async (req, res, next) => {
        try {
            const id = req.params.id;
            const paciente = await db.query('DELETE FROM pacientes where ID = $1', [id]);
            res.json({
                "status": "OK",
                "message": "Se ha eliminado el paciente"
            });
            res.send (paciente);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new PacienteController(); // TODO: debería devolverse la clase no una instancia.