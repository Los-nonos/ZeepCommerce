import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import MercadoPagoLayout from '../../components/Organism/ShoppingCart/MercadoPagoLayout';
import styles from '../../../styles/zeepCommerceStyle/pages/cartCheckoutStyle';
import classNames from 'classnames';
import Main from '../../layouts/Main';

class CartCheckout extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Main pageName={'Pagar - Zeep'}>
        <div className={classNames(classes.container)}>
          <script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js" />
          <MercadoPagoLayout cart={{ description: 'Azucar blanca', transactionAmount: 350 }} />
        </div>
      </Main>
    );
  }
}

const mapStateToProps = state => {
  return state.dashboardReducer;
};

export default connect(mapStateToProps)(withStyles(styles)(CartCheckout));
