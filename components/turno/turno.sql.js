const createError = require('http-errors');

module.exports = class TurnoSql {
    constructor(db) {
        this.db = db;
    }

    /**
     * @description Listar Turnos
     * @return {Array<JSON>}
     */
    fetchAll = async () => {
        try {
            const turnos = await this.db.query(`
                SELECT t.id as id_turno, t.id_paciente, CONCAT(p.nombre,' ',p.apellido) as Paciente, it.fecha_hora_turno,t.practica
                    FROM turnos t
                    JOIN pacientes p ON p.id = t.id_paciente
                    JOIN informacion_turnos it ON t.id = it.id_turno
                    JOIN estados e ON e.id = it.id_estado
                    WHERE e.descripcion = 'ASIGNADO'`);
            return turnos.rows;
        } catch (error) {
            return createError(404, 'No se pudo listar');
        }
    }


    // en esta consulta agregar en el where condicion para traer aquellos turnos con estados asignado
    /**
     * @param {Number} id_profesional
     * @return {Array<JSON>}
     */
    asignadoAProfesional = async (id_profesional) => {
        try{
            const turnos = await this.db.query(
                `SELECT it.fecha_hora_turno, t.duracion
                    FROM turnos t
                    LEFT JOIN informacion_turnos it ON it.id_turno = t.id
                    LEFT JOIN estados e ON e.id = it.id_estado
                    WHERE t.id_profesional = $1 and e.descripcion = "ASIGNADO"`,[
                id_profesional
            ]);
            return turnos.rows;
        } catch(error){
            createError(400,"No se pudo listar los turnos");
        }
        
    }

    /**
     * @param {Number} id_paciente
     * @param {Number} id_profesional
     * @param {String} practica
     * @param {String} duracion HH:mm
     */
    create = async (id_paciente, id_profesional, practica, duracion) => {
        try {
            const turno = await this.db.query(`
                INSERT INTO turnos (id_paciente, id_profesional, practica, duracion)
                VALUES ($1,$2,$3,$4)
                RETURNING id`, [
                id_paciente, id_profesional, practica, duracion
            ]);
            return turno;
        } catch(error) {
            createError(400, "No se pudo crear el turno")
        }
    }

    /**
     * @param {Number} id_turno
     * @param {String} fecha_hora_turno
     */
    asignar = async (id_turno, fecha_hora_turno) => {
        try {
            const turno = await this.db.query(`
                INSERT INTO informacion_turnos (id_turno, id_estado, fecha_hora_turno)
                VALUES ($1,$2,$3)
                RETURNING *`,[
                id_turno, 1, fecha_hora_turno
            ]);
            return turno;
        } catch(error) {
            createError(400, "No se pudo asignar el turno")
        }
    }
}