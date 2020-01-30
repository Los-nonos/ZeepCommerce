import React from 'react';
import Head from 'next/head';
import Parallax from '../sections/home/Parallax';
import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';

class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <Head>
            <title>Landing page - Zeep</title>
          <link rel="stylesheet" href="../../static/build/scss/containers/home.css" />
        </Head>
        <Header />
        <Carrousel />
        <Parallax />
        <Footer />
      </>
    );
  }
}

export default Home;
