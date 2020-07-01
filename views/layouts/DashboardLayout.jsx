import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import routes from '../../utils/routes/dashboardRoutes';
import Header from '../components/Molecules/Header/Header';
import Footer from '../components/Molecules/Footer/Footer';
import Sidebar from '../components/Organism/Sidebar/Sidebar';
import Loader from '../components/Organism/Loader/Loader';

import dashboardLayoutStyles from '../../styles/zeepCommerceStyle/layout/dashboardLayoutStyle';

class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <>
        {/*<Loader />*/}
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
            <Header routes={routes} handleDrawerToggle={this.handleDrawerToggle} color={'primary'} {...rest} />
            <div className={classes.content}>
              <div className={classes.container}>

              </div>
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return state.dashboardReducer;
};

export default connect(mapStateToProps)(withStyles(dashboardLayoutStyles)(DashboardLayout));
