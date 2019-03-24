import React, { Component } from 'react';
import axios from 'axios';
import Paginacion from '../Paginacion';

class ObraSocial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obras_sociales: [],
            id: 0  ,
            nombre: '',
            descripcion: '',

        };
        this.handleChange = this.handleChange.bind(this);
        this.agregarObraSocial = this.agregarObraSocial.bind(this);

    }

    //Lista Obras Sociales
    getObrasSociales = async () => {
        try {
            const res = await axios.get("/obras_sociales");
            const obras_sociales = await res.data;
            this.setState({ obras_sociales });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getObrasSociales();
    }

    //Agregar Obra Social
    //Prevent Default: se evita la recarga al enviar el formulario
    agregarObraSocial = event => {
        event.preventDefault();
        axios.post(`/obras_sociales`,
            { nombre: this.state.nombre },
            { descripcion: this.state.descripcion }
        ).then(res => {
            this.setState({})
            console.log(res);
            console.log(res.data);
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const id = this.state.id;
        axios.delete(`/obras_sociales/${id}`)
                  .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

   

    handleChange = event => {
        this.setState({ id: event.target.value });
        this.setState({ nombre: event.target.value });
        this.setState({ descripcion: event.target.value });
    }

    render() {
        return (
            <div className="container">
                <h2>Obras Sociales</h2>
                <Paginacion
                    rhead={["Nombre", "Descriptción"]}
                    rbody={this.state.obras_sociales.map( (obra_social) => {
                        return [ obra_social.nombre, obra_social.descripcion ]
                    })}
                />
                {/* <form>
                    <button type="submit" className="btn btn-info">Agregar Obras Sociales</button>
                    <div className="form-group">
                        <label>
                            Nombre:
                     </label>
                        <input
                            type="text"
                            name="nombre"
                            onChange={this.handleChange}
                            className="form-control"
                            required />

                        <label>
                            Descripcion:
                        </label>
                        <input
                            type="text"
                            name="descripcion"
                            className="form-control"
                            onChange={this.handleChange} />
                        <button type="submit" className="btn btn-primary">Agregar Obra Social</button>
                    </div>
                </form> */}
            </div>
        )
    }
}

export default ObraSocial