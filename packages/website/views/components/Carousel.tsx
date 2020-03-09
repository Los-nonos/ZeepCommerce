import React from 'react';
//Importar material-ui

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <div className="contenedor-carousel">
          <div className="container-descuentos-publicidad">
            <h2>Descuentos</h2>
            <img src="./logoNav.jpeg" alt="Descuentos" width="350px" />
          </div>
          <div className="container-carousel-imagenes">
            <h2>Carrousel</h2>
            <img src="./logoNav.jpeg" alt="Descuentos" width="350px" />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
