import React from 'react';
//importar boton desde los atomos
import Button from './Atoms/Global/CustomButton';

class NavBarZeep extends React.Component {
  render() {
    return (
      <div>
        <div className="contenedor-header">
          <div className="logo">
            <img src="./logoNav.jpeg" alt="Logo Zeep" width="200px" />
            {/* <img src="{logoNav}" alt="dsds" /> */}
          </div>
          <div className="navegacion">
            <Button content={'Shopping'} color="primary">
              Shopping
            </Button>

            <Button variant="contained" color="primary">
              Contacto
            </Button>
            <Button variant="contained" color="primary">
              About us
            </Button>
            <Button variant="contained" color="primary" href="/login">
              Login
            </Button>
            <Button variant="contained" color="primary">
              Sing up
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBarZeep;
