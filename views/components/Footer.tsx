import React from 'react';
//Importar estilos de material-ui

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="contenedor">
          <div className="copyrigth"> © 2006 por Zeep </div>
          <div className="informacion">
            <a href="#">Informacion de la compania |</a>
            <a href="#"> Privacidad y politica |</a>
            <a href="#"> Terminos y condiciones</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
