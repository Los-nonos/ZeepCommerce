import React from 'react';
import Head from 'next/head';
import Parallax from '../sections/home/Parallax';
import Header from '../components/Header';
import Body from '../components/Body';
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
        
        <Body />
        <div className="main main-raised custom-card-body">
          <div className="container">
            <div className="section text-center">
              <h2 className="title">Your main section here</h2>
            </div>
          </div>
        </div>
        <Parallax />
        <Footer />
      </>
    );
  }
}

export default Home;
