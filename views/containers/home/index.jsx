import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import Main from '../../layouts/Main';
import Parallax from '../../components/Molecules/Parallax/Parallax';
import { getQueryHash } from '../../../helpers/queryBuilder';
import Card from '../../components/Atoms/Card/Card';
import ProductSection from '../../components/Organism/ProductSection/ProductSection';
import GridContainer from '../../components/Atoms/Grid/GridContainer';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  getProducts = () => {
    //TODO: get api products for landing page
    const arrayProducts = this.getProductFromAPI();

    return <ProductSection data={arrayProducts} />;
  };

  getProductFromAPI = () => {
    return [
      {
        image:
          'https://static.bhphoto.com/images/images500x500/asus_ux534ftc_bh74_i7_10510u_16gb_512ssd_gtx1650_1572345160_1508643.jpg',
        productName: 'Notebook',
        productDescription: 'notebook asus',
        price: 100,
      },
      {
        image:
          'https://static.bhphoto.com/images/images500x500/asus_ux534ftc_bh74_i7_10510u_16gb_512ssd_gtx1650_1572345160_1508643.jpg',
        productName: 'Nootebook',
        productDescription: 'notebook apple',
        price: 500,
        promotion: true,
      },
      {
        image:
          'https://static.bhphoto.com/images/images500x500/asus_ux534ftc_bh74_i7_10510u_16gb_512ssd_gtx1650_1572345160_1508643.jpg',
        productName: 'Nootebook',
        productDescription: 'notebook apple',
        price: 500,
        promotion: true,
      },
      {
        image:
          'https://static.bhphoto.com/images/images500x500/asus_ux534ftc_bh74_i7_10510u_16gb_512ssd_gtx1650_1572345160_1508643.jpg',
        productName: 'Nootebook',
        productDescription: 'notebook apple',
        price: 500,
        promotion: true,
      },
    ];
  };

  render() {
    return (
      <Main>
        <Head>
          <title>Home</title>
          <link rel="stylesheet" href={`../style/index.scss?q=${getQueryHash()}`} />
        </Head>
        <Parallax />
        <GridContainer alignItems={'center'} justify="center" direction="row">
          <Card style={{ margin: '100px', backgroundColor: '#fff' }}>
            <GridContainer justify={'center'} direction={'row'}>
              {this.getProducts()}
            </GridContainer>
          </Card>
        </GridContainer>
      </Main>
    );
  }
}

export default Home;
