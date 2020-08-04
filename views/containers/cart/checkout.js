import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import MercadoPagoLayout from '../../components/Organism/ShoppingCart/MercadoPagoLayout';
import styles from '../../../styles/zeepCommerceStyle/pages/cartCheckoutStyle';
import classNames from 'classnames';
import Main from '../../layouts/Main';

class CartCheckout extends React.Component {

  getDescription = () => {
    let description = '';
    this.props.cart.productsSaved.forEach(product => {
      description += `${product.name}, \n`;
    });
    return description.substring(0, description.length - 4);
  }

  calculateTotalPrice() {
    let acumulated = 0;
    this.props.cart.productsSaved.forEach(product => {
      acumulated += (product.price * product.quantity);
    });
    return acumulated;
  }

  render() {
    const { classes } = this.props;
    return (
      <Main pageName={'Pagar - Zeep'}>
        <div style={{backgroundColor: '#000'}} className={classNames(classes.container)}>
          {this.props.paymentMethods.mercadoPago ? (
            <>
              <MercadoPagoLayout cart={{ description: this.getDescription(), transactionAmount: this.calculateTotalPrice() }} />
            </>
          ) : null}
        </div>
      </Main>
    );
  }
}

const mapStateToProps = state => {
  return state.dashboardReducer;
};

export default connect(mapStateToProps)(withStyles(styles)(CartCheckout));
