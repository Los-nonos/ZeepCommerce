import React from 'react';
import Button from '@material-ui/core/Button';

// import logoNav from '../components/00-Atoms/00-Global/01-img/logoNav.jpeg';

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
            <Button variant="contained" color="primary">
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
