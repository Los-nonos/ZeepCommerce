import React from 'react';
import Footer from '../components/Atoms/Footer/Footer';

// Next
import Head from 'next/head';
import PropTypes from 'prop-types';

// Components
// import NavBar from '../components/NavBar';
//import NavBarCustomer from '../components/NavBarCustomer';
import GridContainer from '../components/patterns/molecules/GridContainer';
import Header from '../components/Atoms/Header/Header';
import HeaderLinks from '../components/Atoms/Header/HeaderLinks';

const Main = (props: any) => {
  const { pageName, children } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <title>{pageName}</title>
      </Head>

      <Header absolute color="transparent" brand="Zeep Commerce" rightLinks={<HeaderLinks />} />

      <GridContainer justify="center">{children}</GridContainer>
      <Footer />
    </>
  );
};

Main.defaultTypes = {
  pageName: 'Zeep - Landing',
};

Main.PropTypes = {
  pageName: PropTypes.string,
  children: PropTypes.node,
};

export default Main;
