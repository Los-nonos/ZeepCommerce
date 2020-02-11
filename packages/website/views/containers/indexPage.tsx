import React from 'react';
import Head from 'next/head';
import Parallax from '../sections/home/Parallax';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import { getQueryHash } from '../../helpers';

class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <Head>
            <title>Landing page - Zeep</title>
          <link rel="stylesheet" href={`../../static/build/scss/containers/home.css?query=${getQueryHash()}`} />
        </Head>
        <Header />
        <Body />
        {/* <div className="main main-raised custom-card-body">
          <div className="container">
            <div className="section text-center">
              <h2 className="title">Imagenes de productos</h2>
              <section className="section-img">
                <div className="img-one">
                  <img src="./public/src/img/one.jpg" alt=""/>
                </div>
                <div className="img-two">
                <img src="" alt=""/>
                </div>
                <div className="img-three">
                <img src="" alt=""/>
                </div>
              </section>
            </div>
          </div>
        </div> */}
        <Parallax />
        <Footer />
      </>
    );
  }
}

export default Home;
