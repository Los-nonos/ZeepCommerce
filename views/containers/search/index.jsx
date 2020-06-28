import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Parallax from '../../components/Molecules/Parallax/Parallax';
import GridContainer from '../../components/Atoms/Grid/GridContainer';
import GridItem from '../../components/Atoms/Grid/GridItem';
import SectionProducts from '../../components/Organism/ProductSection/ProductSection';

import { withStyles } from '@material-ui/core';
import ProductFilter from '../../components/Molecules/ProductFilter/Selector';
import Main from '../../layouts/Main';
import classNames from 'classnames';
import * as actions from '../../../actions/SearchActions';

import style from '../../../styles/zeepCommerceStyle/pages/searchProductsStyles';

class SearchProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page,
      orderBy: 'registrationDate',
      order: 'desc',
      currentFilters: [],
    };

    this.dispatch = props.dispatch;
    this.handleLoadSearchProducts();
  }

  handleLoadSearchProducts = () => {
    this.dispatch(actions.loadFilters());
    this.dispatch(
      actions.filterProducts(this.state.currentFilters, this.state.page, this.state.orderBy, this.state.order),
    );
  };

  listProducts = () => {
    const products = [];

    for (const product of this.props.products) {
      const characteristics = [];

      for (const characteristic of product.characteristics) {
        characteristics.push(characteristic.value);
      }
      let listOfCharacteristics = characteristics.toString();
      listOfCharacteristics = listOfCharacteristics.replace(/,/gi, ', ');

      const dataProduct = {
        visibleData: [product.name, product.price, listOfCharacteristics],
        uuid: product.uuid,
        id: product.id,
      };

      products.push(dataProduct);
    }

    return products;
  };

  componentDidMount() {
    this.handleLoadSearchProducts();
  }

  handleFilters = (filters) => {
    console.log(filters);
    this.setState({currentFilters: filters});
  }

  pagination = () => {
    const pages = [
      {
        text: 'PREV',
        onClick: () => {
          this.dispatch(actions.previousPage());
        },
      },
    ];
    for (let index = 1; index <= this.props.totalPages; index++) {
      if (index === this.props.page) {
        pages.push({ text: index, active: true });
      } else {
        pages.push({
          text: index,
          onClick: () => {
            this.dispatch(actions.selectPage(index));
          },
        });
      }
    }
    pages.push({
      text: 'NEXT',
      onClick: () => {
        this.dispatch(actions.nextPage());
      },
    });
    return pages;
  };

  render() {
    if (this.state.page !== this.props.page) {
      this.setState({ page: this.props.page });
      this.handleLoadSearchProducts();
    }

    const { classes } = this.props;
    return (
      <Main pageName="Products - Zeep">
        <div>
          <Parallax filter="dark" small image="/img/bg2.jpg">
            <div className={classes.container}>
              <GridContainer>
                <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
                  <div className={classes.brand}>
                    <h1 className={classes.title}>Página de productos</h1>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.section}>
              <div className={classes.containerSection}>
                <GridContainer>
                  <GridItem md={3} sm={3}>
                    <ProductFilter
                      loadFilters={actions.loadFilters}
                      filterProducts={actions.filterProducts}
                      handleFilters={this.handleFilters}
                      currentFilters={this.state.currentFilters}
                    />
                  </GridItem>
                  <GridItem md={9} sm={9}>
                    <SectionProducts data={this.props.products} seeDetails={actions.seeDetails} />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
      </Main>
    );
  }
}

SearchProducts.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  page: PropTypes.number,
  message: PropTypes.string,
  products: PropTypes.array,
};

const mapStateToProps = state => {
  return state.productsReducer;
};

export default connect(mapStateToProps)(withStyles(style)(SearchProducts));
