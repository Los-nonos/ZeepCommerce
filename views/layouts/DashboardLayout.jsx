import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core';
import ChangePasswordContainer from '../containers/dashboard/change-password';
import DashboardBase from '../components/Organism/dashboard/DashboardBase';

const dashboardLayoutStyles = {

};

class DashboardLayout extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={'/'} component={DashboardBase} />
        <Route path="/auth/change-password" component={ChangePasswordContainer} />
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return state.dashboardReducer;
};


export default connect(mapStateToProps)(withStyles(dashboardLayoutStyles)(DashboardLayout));