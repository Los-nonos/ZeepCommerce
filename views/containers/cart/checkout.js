import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
const styles = {};

class CartCheckout extends React.Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.dashboardReducer;
}

export default connect(mapStateToProps)(withStyles(styles)(CartCheckout));