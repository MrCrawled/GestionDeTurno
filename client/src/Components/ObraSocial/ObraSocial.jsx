import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paginacion from '../Paginacion';

class ObraSocial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obras_sociales: []
        };
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

    render() {
        return (
            <div>
                <h2>Obras Sociales</h2>
                <Link to="/obras_sociales/new">
                    <button type="button" className="btn">Nueva Obra Social</button>
                </Link>
                <Paginacion
                    rhead={["Nombre", "Descriptción"]}
                    rbody={this.state.obras_sociales.map( (obra_social) => {
                        return [ obra_social.nombre, obra_social.descripcion ]
                    })}
                />
            </div>
        )
    }
}

export default ObraSocial