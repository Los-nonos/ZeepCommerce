import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import DashboardLayout from '../../layouts/DashboardLayout';
const styles = {};

class AccountPage extends React.Component {
  render() {
    return (
      <DashboardLayout>

      </DashboardLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.dashboardReducer;
}

export default connect(mapStateToProps)(withStyles(styles)(AccountPage));