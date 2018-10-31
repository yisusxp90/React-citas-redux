import React, { Component } from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';
import { agregarCita } from '../actions/citasActions'; 
import { mostrarError } from '../actions/errorActions'; 

class AgregarCita extends Component {

    componentWillMount(){
        this.props.mostrarError(false);
    }

    nombreMascotaRef = React.createRef();
    propietarioRef = React.createRef();
    fechaRef = React.createRef();
    horaRef = React.createRef();
    sintomasRef = React.createRef();
    
    crearNuevacita = (e) =>{
        e.preventDefault();
        const nuevaCita = {
            id: uuid(),
            mascota : this.nombreMascotaRef.current.value,
            propietario : this.propietarioRef.current.value,
            fecha : this.fechaRef.current.value,
            hora : this.horaRef.current.value,
            sintomas : this.sintomasRef.current.value
        }
        if(nuevaCita.mascota === '' || nuevaCita.propietario === '' || nuevaCita.fecha === '' || nuevaCita.hora === '' || nuevaCita.sintomas === '' ){
            this.props.mostrarError(true);
        }else{
            this.props.agregarCita(nuevaCita);
            e.currentTarget.reset();
            this.props.mostrarError(false);
        }

    }

    render() {
        const existeError = this.props.error;
      return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
                    <form onSubmit={this.crearNuevacita}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre Mascota" ref={this.nombreMascotaRef}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" ref={this.propietarioRef} />
                            </div>
                        </div>

                            <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input type="date" className="form-control" ref={this.fechaRef}/>
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" className="form-control" ref={this.horaRef} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea  className="form-control" ref={this.sintomasRef} ></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                    {existeError ? <div className="alert alert-danger text-center">Todos los campos son obligatorios</div> : ''}
                </div>
            </div>
      );
    }
  }
  const mapStateToProps = state => ({
    citas: state.citas.citas,
    error: state.error.error
  })
  export default connect(mapStateToProps, {agregarCita, mostrarError}) (AgregarCita);