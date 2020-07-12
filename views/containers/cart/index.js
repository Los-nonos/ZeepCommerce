import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/DashboardActions';
import classNames from 'classnames';
import { pages, redirectTo } from '../../../utils/helpers/redirectTo';
import Button from '../../components/Atoms/CustomButtons/Button';
import { withStyles } from '@material-ui/core';
import styles from '../../../styles/zeepCommerceStyle/pages/cartStyle';
import Main from '../../layouts/Main';
import CardBody from '../../components/Atoms/Card/CardBody';
import Card from '../../components/Atoms/Card/Card';
import Table from '../../components/Molecules/Table/CustomTable';
import { Add, Close, KeyboardArrowRight, Remove } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import GridContainer from '../../components/Atoms/Grid/GridContainer';
import GridItem from '../../components/Atoms/Grid/GridItem';
import Parallax from '../../components/Molecules/Parallax/Parallax';

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isMounted: false,
    }
    this.dispatch = props.dispatch;
    this.dispatch(actions.loadProductsFromShoppingCart());
    if(this.isCartContainsProducts()) {
      this.listProducts();
    }
  }

  listProducts = () => {
    const { classes } = this.props;
    const products = this.props.cart.productsSaved.map(product => {
      return [
        <div className={classes.imgContainer} key={1}>
          <img src={product.images[0]} alt="..." className={classes.img} />
        </div>,
        <span key={1}>
          <a href="#jacket" className={classes.tdNameAnchor}>
            {product.name}
          </a>
          <br />
          <small className={classes.tdNameSmall}>{product.brands[0]}</small>
        </span>,
        product.characteristics[0].name,
        <span key={1}>
          <small className={classes.tdNumberSmall}>$</small>
          {product.price}
        </span>,
        <span key={1}>
          {product.quantity}
          {` `}
          <div className={classes.buttonGroup}>
            <Button color="info" size="sm" round className={classes.firstButton} onClick={this.removeProductQuantity(product.id)}>
              <Remove />
            </Button>
            <Button color="info" size="sm" round className={classes.lastButton} onClick={this.addProductQuantity(product.id)}>
              <Add />
            </Button>
          </div>
        </span>,
        <span key={1}>
          <small className={classes.tdNumberSmall}>$</small>{this.calculateAmount(product.price, product.quantity)}
        </span>,
        <Tooltip key={1} id="close1" title="Remove item" placement="left" classes={{ tooltip: classes.tooltip }}>
          <Button link round={true}>
            <Close />
          </Button>
        </Tooltip>,
      ];
    });

    products.push({
      purchase: true,
      colspan: '3',
      amount: (
        <span>
          <small>€</small>2,346
        </span>
      ),
      col: {
        colspan: 3,
        text: (
          <Button color="info" round onClick={this.setMercadoPago()}>
            Completar Compra <KeyboardArrowRight />
          </Button>
        ),
      },
    });

    this.setState({ products, isMounted: true });
  };

  setMercadoPago = () => {
    if(!this.state.isMounted) {
      return;
    }
    this.dispatch(actions.mercadoPagoSelected());
  };

  isCartContainsProducts = () => {
    return this.props.cart.productsSaved.length >= 1;
  }

  calculateAmount(price, quantity) {
    return price * quantity;
  }

  removeProductQuantity = (id) => {
    if(!this.state.isMounted) {
      return;
    }
    this.dispatch(actions.removeProductQuantityFromShoppingCart(id));
  }

  addProductQuantity = (id) => {
    if(!this.state.isMounted) {
      return;
    }
    this.dispatch(actions.addProductQuantityFromShoppingCart(id));
  }

  render() {
    const { classes } = this.props;
    if(this.state.products.length === 0 && this.isCartContainsProducts()) {
      this.listProducts();
    }

    return (
      <Main pageName={'Shopping cart - Zeep'}>
        <Parallax image={'/img/bg2.jpg'} small={true}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
                <h2 className={classes.title}>Shopping Page</h2>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Card plain={true}>
              <CardBody plain={true}>
                {this.isCartContainsProducts() ? (
                  <>
                    <h3 className={classes.cardTitle}>Shopping Cart</h3>
                    <Table
                      tableHead={['', 'PRODUCTO', 'COLOR', 'PRECIO', 'CANTIDAD', 'MONTO', '']}
                      tableData={this.state.products}
                      tableShopping={true}
                      customHeadCellClasses={[
                        classes.textCenter,
                        classes.description,
                        classes.description,
                        classes.textRight,
                        classes.textRight,
                        classes.textRight,
                      ]}
                      customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                      customCellClasses={[
                        classes.tdName,
                        classes.customFont,
                        classes.customFont,
                        classes.tdNumber,
                        classes.tdNumber + ' ' + classes.tdNumberAndButtonGroup,
                        classes.tdNumber + ' ' + classes.textCenter,
                      ]}
                      customClassesForCells={[1, 2, 3, 4, 5, 6]}
                    />
                  </>
                ) : (
                  <h2 className={classNames(classes.mrAuto, classes.mlAuto, classes.textCenter)} style={{ color: '#fff' }}>No tienes productos en el carrito</h2>
                )}
              </CardBody>
            </Card>
          </div>
        </div>
      </Main>
    );
  }
}

const mapStateToProps = state => {
  return state.dashboardReducer;
};

export default connect(mapStateToProps)(withStyles(styles)(CartIndex));
