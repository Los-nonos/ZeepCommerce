import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/DashboardActions';
import classNames from 'classnames';
import { pages, redirectTo } from '../../utils/helpers/redirectTo';
import Button from '../../views/components/Atoms/CustomButtons/Button';
import { withStyles } from '@material-ui/core';
import styles from '../../styles/zeepCommerceStyle/pages/cartStyle';
import Main from '../../views/layouts/Main';
import CardBody from '../../views/components/Atoms/Card/CardBody';
import Card from '../../views/components/Atoms/Card/Card';
import Table from '../../views/components/Molecules/Table/CustomTable';
import { Add, Close, KeyboardArrowRight, Remove } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import GridContainer from '../../views/components/Atoms/Grid/GridContainer';
import GridItem from '../../views/components/Atoms/Grid/GridItem';
import Parallax from '../../views/components/Molecules/Parallax/Parallax';

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
  }

  listProducts = () => {
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
        'M',
        <span key={1}>
          <small className={classes.tdNumberSmall}>$</small>
          {product.price}
        </span>,
        <span key={1}>
          {product.quantity}
          {` `}
          <div className={classes.buttonGroup}>
            <Button color="info" size="sm" round className={classes.firstButton}>
              <Remove />
            </Button>
            <Button color="info" size="sm" round className={classes.lastButton}>
              <Add />
            </Button>
          </div>
        </span>,
        <span key={1}>
          <small className={classes.tdNumberSmall}>$</small> 549
        </span>,
        <Tooltip key={1} id="close1" title="Remove item" placement="left" classes={{ tooltip: classes.tooltip }}>
          <Button link className={classes.actionButton}>
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
          <Button color="info" round>
            Completar Compra <KeyboardArrowRight />
          </Button>
        ),
      },
    });

    return products;
  };

  setMercadoPago = () => {
    this.dispatch(actions.mercadoPagoSelected());
  };

  isCartContainsProducts = () => {
    return this.props.cart.productsSaved.length >= 1;
  }

  render() {
    const { classes } = this.props;
    return (
      <Main pageName={'Shopping cart - Zeep'}>
        <Parallax image={'/img/bg2.jpg'} small>
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
            <Card plain={'true'}>
              <CardBody plain={'true'}>
                {this.isCartContainsProducts() ? (
                  <>
                    <h3 className={classes.cardTitle}>Shopping Cart</h3>
                    <Table
                      tableHead={['', 'PRODUCTO', 'COLOR', 'TAMAÑO', 'PRECIO', 'CANTIDAD', 'MONTO', '']}
                      tableData={this.listProducts()}
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
