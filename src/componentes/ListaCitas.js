import React, { Component } from 'react';
import Cita from './Cita';

//redux
import { connect} from 'react-redux';
import { obtenerCitas } from '../actions/citasActions';

import store from '../store';

store.subscribe( () => {
    localStorage.setItem('citas', JSON.stringify(store.getState()));
})

class ListaCitas extends Component {
    componentDidMount() {
        this.props.obtenerCitas();
    }

    render() {
        const citas = this.props.citas;
        const mensaje = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Aministrar Citas';
      return (
        <div className="card mt-5">
            <div className="card-body border">
                <h2 className="card-title text-center border border-danger">{mensaje}</h2>
                <div className="lista-citas">
                    {Object.keys(this.props.citas).map(cita => (
                        <Cita 
                            key={cita} 
                            idCita={cita}
                            info = {this.props.citas[cita]}
                            borrarCita = {this.props.borrarCita}/>
                    ))}
                </div>
            </div>
        </div>
  
      );
    }
  }
  
  const mapStateToProps = state => ({
      citas: state.citas.citas
  })
  export default connect(mapStateToProps, {obtenerCitas}) (ListaCitas);