import React, { Component } from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';


class App extends Component {

  state = {
    citas : {}
  }
  crearCita = (infoCita) => {
      const citas = {...this.state.citas};
      citas[`citas${Date.now()}`] = infoCita;
      this.setState({
        citas : citas
      })
  }

  borrarCita = (id) => {
      const citas = {...this.state.citas};
      delete citas[id];
      this.setState({
        citas: citas
      })
  }

  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
  }

  render() {
    return (
      <div className="container">
          <Header titulo="Administrador de Pacientes"/>
          <div className="row">
            <div className="col-md-6">
              <AgregarCita 
                crearCita={this.crearCita}/>
            </div>
            <div className="col-md-6">
              <ListaCitas 
                citas={this.state.citas}
                borrarCita={this.borrarCita}/>
            </div>
          </div>          
      </div>

    );
  }
}

export default App;
