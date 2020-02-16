import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import Main from '../../layouts/Main';
import Parallax from '../../components/Parallax';

class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Main>
        <Head>
          <title>Home</title>
        </Head>
        <Parallax />
        <Link href="/login">
          <a title="Registro de Usuario">Ir al Login</a>
          </Link>
      </Main>
    );
  }
}

export default Home;
