import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Botton from './patterns/atoms/Buttom';
import { makeStyles } from '@material-ui/core/styles';
import NavBarCustomerStyle from '../../public/Style/NavBarCustomerStyle';

class NavBarCustomer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <img src="./img/logos/logo.jpg" alt="Logo de la empresa" width="10%" />
          <Botton content="Shopping" />
          <Botton content="Contacto" />
          <Botton content="Aboutus" />
          <Botton content="Login" />
          <Botton content="Sigup" />
        </header>
      </div>
    );
  }
}

export default NavBarCustomer;
