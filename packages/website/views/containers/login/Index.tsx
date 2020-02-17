import React from 'react';

// Components
import Main from '../../layouts/Main';
import Head from 'next/head';
import Description from '../../components/Description';
import Link from 'next/link';

class LoginPage extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Main>
        <Head>
          <title>Zeep - Login</title>
          <link href="../../static/build/scss/login.css" rel="stylesheet" />
        </Head>
        <Description />
        <Link href="/">
          <a>Ir al Inicio</a>
          </Link>
      </Main>
    );
  }
}

export default LoginPage;
