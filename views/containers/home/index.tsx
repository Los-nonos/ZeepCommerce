import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import Main from '../../layouts/Main';
import Parallax from '../../components/Parallax';
import { getQueryHash } from '../../../helpers/queryBuilder';

class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Main>
        <Head>
          <title>Home</title>
          <link rel="stylesheet" href={`../style/index.scss?q=${getQueryHash()}`} />
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
