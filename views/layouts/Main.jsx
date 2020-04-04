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
import { withStyles } from '@material-ui/core';

const styles = {
  body: {
    margin: 0,
    padding: 0,
  },
};

function Main(props) {
  const { pageName, children, ...rest } = props;

  return (
    <div style={{ margin: '0px', padding: '0px' }}>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="style/index.scss?v=1.0.0" />
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

export default withStyles(styles)(Main);
