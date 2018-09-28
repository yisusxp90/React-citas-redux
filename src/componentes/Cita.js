import React, { Component } from 'react';

class Cita extends Component {

    render() {
        const {fecha, hora, mascota, propietario, sintomas} = this.props.info;
      return (
        <div className="mdia mt-3 border-bottom">
            <div className="mdia-body">
                <h3 className="mt-0">{mascota}</h3>
                <p className="card-text"><b>Nombre Dueño:</b> {propietario}</p>
                <p className="card-text"><b>Fecha:</b> {fecha}</p>
                <p className="card-text"><b>Hora:</b> {hora}</p>
                <p className="card-text"><b>Sintomas:</b> <br />
                    {sintomas}
                </p>

                <button onClick={() => this.props.borrarCita(this.props.idCita)} className="btn btn-danger">Borrar &times;</button>
            </div>
        </div>
  
      );
    }
  }
  
  export default Cita;