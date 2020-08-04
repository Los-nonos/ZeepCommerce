import React from 'react';
import ReactDOM from 'react-dom';
import App from 'next/app';
import Router from 'next/router';
import configureStore from '../config/configureStore';
import { Provider } from 'react-redux';

import PageChange from '../views/components/Molecules/PageChange/PageChange';

import 'public/style/index.scss?v=1.0.0';

const store = configureStore();

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  document.body.classList.add('body-page-transition');
  ReactDOM.render(<PageChange path={url} />, document.getElementById('page-transition'));
});
Router.events.on('routeChangeComplete', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});
Router.events.on('routeChangeError', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be accessed by the client
    return { pageProps };
  }
  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      </Provider>
    );
  }
}

export const dispatch = store.dispatch;
