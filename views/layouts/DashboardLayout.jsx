import React from 'react';
import { withStyles } from '@material-ui/core';
import routes from '../../utils/routes/dashboardRoutes';
import Header from '../components/Molecules/Header/Header';
import Footer from '../components/Molecules/Footer/Footer';
import Sidebar from '../components/Organism/Sidebar/Sidebar';

import dashboardLayoutStyles from '../../styles/zeepCommerceStyle/layout/dashboardLayoutStyle';
import Head from 'next/head';

class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
  }

  render() {
    const { classes, children, title, ...rest } = this.props;
    return (
      <>
        {/*<Loader />*/}
        <Head>
          <title>{title}</title>
        </Head>
        <div className={classes.wrapper}>
          <Sidebar
            routes={routes}
            handleDrawerToggle={this.handleDrawerToggle}
            open={this.state.mobileOpen}
            color={this.state.color}
            userRoles={this.state.userRoles}
            {...rest}
          />
          <div className={classes.mainPanel} ref="mainPanel">
            <Header
              brand={'Dashboard'}
              routes={routes}
              handleDrawerToggle={this.handleDrawerToggle}
              color={'primary'}
              {...rest}
            />
            <div className={classes.content}>
              <div className={classes.container}>{children}</div>
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(dashboardLayoutStyles)(DashboardLayout);
