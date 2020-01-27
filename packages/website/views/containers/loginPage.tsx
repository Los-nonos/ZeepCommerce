import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Description from '../sections/login/Description';

class LoginPage extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <Head>
          <title>Zeep - Login</title>
          <link href="../../static/build/scss/login.css" rel="stylesheet" />
        </Head>
        <Header />
        <Description />
      </>
    );
  }
}
export default LoginPage;
