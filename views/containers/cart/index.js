import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
const styles = {};

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
  }


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

export default connect(mapStateToProps)(withStyles(styles)(CartIndex));