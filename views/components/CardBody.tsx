import React from 'react';
//Importar los estilos de material-ui

class CardBody extends React.Component {
  render() {
    return (
      <div>
        <div className="container-img">
          <img src="./logoNav.jpeg" alt="Imagen carousel 1" width="200px" />
          <img src="./logoNav.jpeg" alt="Imagen carousel 2" width="200px" />
          <img src="./logoNav.jpeg" alt="Imagen carousel 3" width="200px" />
        </div>
        <div className="container-ultimas-novedades-carousel">
          <img src="./logoNav.jpeg" alt="Carousel-ultimas-novedades" width="200px" />
        </div>
        <div className="container-info">
          <div className="categorias">
            <h3>categorias</h3>
          </div>
          <div className="filtrados">
            <h3>Filtrados</h3>
          </div>
          <div className="ubicacion-mapa">
            <h3>Mapa ubicacion</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default CardBody;
