import React, { Component } from 'react';
import Botton from '../components/patterns/atoms/Buttom';

class NavBarCustomer extends Component {
  render() {
    return (
      <div>
        <header>
          <img src="./img/logos/logo.jpg" alt="Logo de la empresa" width="10%" />
          <Botton content="Shopping" color="red" />
          <Botton content="Contacto" color="red" />
          <Botton content="Aboutus" color="red" />
          <Botton content="Login" color="red" />
          <Botton content="Sigup" color="red" />
        </header>
      </div>
    );
  }
}

export default NavBarCustomer;
