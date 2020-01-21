import React from "react";
import Head from 'next/head';
import Parallax from '../sections/home/Parallax';


class Home extends React.Component {
  constructor(props: any) {
      super(props);
    }

    render(){
        return (
        <div>
            <Head>
                <link rel="stylesheet" href="../static/css/home.css" />
            </Head>
            <h1>Hola, esto es un titulo</h1>
            <Parallax />
        </div>
        )
    }
}

export default Home;
