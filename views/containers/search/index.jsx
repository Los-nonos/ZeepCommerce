import React from 'react';
import Parallax from '../../components/Molecules/Parallax/Parallax';
import GridContainer from '../../components/Atoms/Grid/GridContainer';
import GridItem from '../../components/Atoms/Grid/GridItem';
import SectionProducts from '../../components/Organism/ProductSection/ProductSection';
import { withStyles } from '@material-ui/core';
import ProductFilter from '../../components/Molecules/ProductFilter/Selector';

import Main from '../../layouts/Main';

import classNames from 'classnames';

import style from '../../../style/zeepCommerceStyle/pages/searchProductsStyles';

class SeachProducts extends React.Component {
  getProducts = () => {
    return [
      {
        id: 1,
        image:
          'https://static.bhphoto.com/images/images500x500/asus_ux534ftc_bh74_i7_10510u_16gb_512ssd_gtx1650_1572345160_1508643.jpg',
        productName: 'Notebook',
        productDescription: 'Notebook Asus',
        price: 100,
      },
      {
        id: 2,
        image:
          'https://static.bhphoto.com/images/images500x500/asus_ux534ftc_bh74_i7_10510u_16gb_512ssd_gtx1650_1572345160_1508643.jpg',
        productName: 'Notebook',
        productDescription: 'Notebook Apple',
        price: 500,
        promotion: true,
      },
      {
        id: 3,
        image:
          'https://static.bhphoto.com/images/images500x500/asus_ux534ftc_bh74_i7_10510u_16gb_512ssd_gtx1650_1572345160_1508643.jpg',
        productName: 'Notebook',
        productDescription: 'Notebook Apple',
        price: 500,
        promotion: true,
      },
      {
        id: 4,
        image:
          'https://static.bhphoto.com/images/images500x500/asus_ux534ftc_bh74_i7_10510u_16gb_512ssd_gtx1650_1572345160_1508643.jpg',
        productName: 'Notebook',
        productDescription: 'Notebook Apple',
        price: 500,
        promotion: true,
      },
    ];
  };

  getFilters = () => {
    return [
      {
        title: 'Marca',
        options: [
          {
            id: 1,
            title: 'asus',
            selected: true,
          },
          {
            id: 2,
            title: 'apple',
            selected: false,
          },
        ],
      },
      {
        title: 'Color',
        options: [
          {
            id: 3,
            title: 'Azul',
            selected: true,
          },
          {
            id: 4,
            title: 'Rojo',
            selected: false,
          },
        ],
      },
    ];
  };

  render() {
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
                    <ProductFilter maxPrice="500" minPrice="300" filters={this.getFilters()} />
                  </GridItem>
                  <GridItem md={9} sm={9}>
                    <SectionProducts data={this.getProducts()} />
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

export default withStyles(style)(SeachProducts);
