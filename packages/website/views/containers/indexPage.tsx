import React from "react";
import Head from 'next/head';
import Parallax from '../sections/home/Parallax';
import Header from "../components/Header";
import Carrousel from '../components/Carrousel';

class Home extends React.Component {
  constructor(props: any) {
      super(props);
    }

    render(){
        return (
        <div>
            <Head>
                <link rel="stylesheet" href="../../static/build/scss/home.css" />
            </Head>
            <Header />
            <Carrousel />
            <h1>Hola, esto es un titulo</h1>
            <Parallax />
        </div>
        )
    }
}

export default Home;
