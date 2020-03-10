import React from 'react';

// Next
import Head from 'next/head';

// Components
// import NavBar from '../components/NavBar';
import NavBarZeep from '../components/NavBarZeep';
import Carousel from '../components/Carousel';
import CardBody from '../components/CardBody';
import Footer from '../components/Footer';

const Main = (props: any) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <NavBarZeep />
      <Carousel />
      <CardBody />
      <Footer />

      {props.children}
    </>
  );
};

export default Main;
