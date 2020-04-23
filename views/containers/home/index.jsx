import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import Main from '../../layouts/Main';
import Parallax from '../../components/Molecules/Parallax/Parallax';
import Botton from '../../components/Atoms/CustomButtons/Button';
import ProductSection from '../../components/Organism/ProductSection/ProductSection';
import GridContainer from '../../components/Atoms/Grid/GridContainer';
import GridItem from '../../components/Atoms/Grid/GridItem';

import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import style from '../../../style/zeepCommerceStyle/pages/landingPage';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  getProducts = () => {
    //TODO: get api products for landing page
    const arrayProducts = this.getProductFromAPI();

    return <ProductSection data={arrayProducts.slice(0, 3)} />;
  };

  getProductFromAPI = () => {
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
        productName: 'Nootebook',
        productDescription: 'Notebook Apple',
        price: 500,
        promotion: true,
      },
      {
        id: 3,
        image:
          'https://static.bhphoto.com/images/images500x500/asus_ux534ftc_bh74_i7_10510u_16gb_512ssd_gtx1650_1572345160_1508643.jpg',
        productName: 'Nootebook',
        productDescription: 'Notebook Apple',
        price: 500,
        promotion: true,
      },
      {
        id: 4,
        image:
          'https://static.bhphoto.com/images/images500x500/asus_ux534ftc_bh74_i7_10510u_16gb_512ssd_gtx1650_1572345160_1508643.jpg',
        productName: 'Nootebook',
        productDescription: 'Notebook Apple',
        price: 500,
        promotion: true,
      },
    ];
  };

  render() {
    const { classes } = this.props;
    return (
      <Main pageName="Home - Zeep">
        <div>
          <Parallax filter="dark" small image="/img/bg2.jpg">
            <div className={classes.container}>
              <GridContainer>
                <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
                  <div className={classes.brand}>
                    <h1 className={classes.title}>Bienvenidos a Zeep!</h1>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.section}>
              <div className={classes.containerSection}>
                <GridContainer>
                  <GridItem md={12} sm={12} className={classes.sectionSplited}>
                    <h2 className={`${classes.subtitle} ${classes.mlAuto} ${classes.mrAuto}`}>Productos Destacados</h2>
                    {this.getProducts()}
                  </GridItem>
                  <GridItem md={12} sm={12} className={classes.sectionSplited}>
                    <h2 className={`${classes.subtitle} ${classes.mlAuto} ${classes.mrAuto}`}>
                      Productos Más Vendidos
                    </h2>
                    {this.getProducts()}
                  </GridItem>
                  <GridItem md={12} sm={12} className={classes.sectionSplited}>
                    <h2 className={`${classes.subtitle} ${classes.mlAuto} ${classes.mrAuto}`}>Nuestros Productos</h2>
                    {this.getProducts()}
                  </GridItem>
                  <GridItem md={3} sm={3} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
                    <Botton simple fullWidth color="primary" className={classes.title} href={'/products'}>
                      Ver más
                    </Botton>
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

export default withStyles(style)(Home);
