import React from 'react';

// Next
import Head from 'next/head';
import PropTypes from 'prop-types';

// Components
import Header from '../components/Molecules/Header/Header';
import HeaderLinks from '../components/Molecules/Header/HeaderLinks';
import GridContainer from '../components/Atoms/Grid/GridContainer';
import Footer from '../components/Molecules/Footer/Footer';

function Main(props) {
  const { pageName, children, ...rest } = props;

  return (
    <div>
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

export default Main;
