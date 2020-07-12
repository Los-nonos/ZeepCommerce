import React from 'react';
import { connect } from 'react-redux';
// Next
import Head from 'next/head';
import PropTypes from 'prop-types';

// Components
import Header from '../components/Molecules/Header/Header';
import HeaderLinks from '../components/Molecules/Header/HeaderLinks';
import GridContainer from '../components/Atoms/Grid/GridContainer';
import Footer from '../components/Molecules/Footer/Footer';
import Notification from '../components/Molecules/Notification/Notification';
import * as actions from '../../actions/GeneralActions';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
  }

  closeNotification = () => {
    this.dispatch(actions.closeNotification());
  }

  render() {
    const { pageName, children, ...rest } = this.props;

    return (
      <>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="stylesheet" href="style/index.scss?v=1.0.0" />
          <title>{pageName}</title>
        </Head>
        <Header absolute color="transparent" brand="Zeep Commerce" rightLinks={<HeaderLinks />} {...rest} />
        <Notification closeNotification={this.closeNotification} />
        {children}
        <Footer />
      </>
    );
  }
}

Main.propTypes = {
  pageName: PropTypes.string,
  children: PropTypes.node,
};

const mapStateToProps = state => {
  return state.generalReducer;
}

export default connect(mapStateToProps)(Main);
