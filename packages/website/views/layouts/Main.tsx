import React from 'react';

// Next
import Head from 'next/head';

// Components
import NavBar from '../components/NavBar';

const Main = (props: any) => {
  return(
    <>
      <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <NavBar></NavBar>
      
      {props.children}
    </>
  )
}

export default Main;