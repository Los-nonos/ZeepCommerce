import React from 'react';
import Footer from '../components/Atoms/Footer/Footer';

// Next
import Head from 'next/head';
import PropTypes from 'prop-types';

// Components
// import NavBar from '../components/NavBar';
//import NavBarCustomer from '../components/NavBarCustomer';
import Header from '../components/Atoms/Header/Header';
import HeaderLinks from '../components/Atoms/Header/HeaderLinks';
import GridContainer from 'views/components/patterns/molecules/GridContainer';

function Main(props) {
  const { pageName, children, ...rest } = props;

  return (
    <div>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <title>{pageName}</title>
      </Head>

      <Header absolute color="transparent" brand="Zeep Commerce" rightLinks={<HeaderLinks />} {...rest} />

      <GridContainer>{children}</GridContainer>
      <Footer />
    </div>
  );
}

Main.propTypes = {
  pageName: PropTypes.string,
  children: PropTypes.node,
};

export default Main;
