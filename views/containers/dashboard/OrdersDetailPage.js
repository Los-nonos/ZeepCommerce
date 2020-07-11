import * as React from 'react';
import {connect} from 'react-redux';

import * as actions from '../../../actions/DashboardActions';
import { withStyles } from '@material-ui/core/styles';
import style from '../../../styles/zeepCommerceStyle/components/productCardStyle';
import { useRouter } from 'next/router'

class OrdersDetailPage extends React.Component{

  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.loadOrder();
  }

  loadOrder = () => {
    this.dispatch(actions.getOrder(this.props.uuid));
  }

  render() {
    const {classes} = this.props;
    return(
      <div>
        <h4>{this.props.orderWithDetails.titleProduct}</h4>
        <h4>{this.props.orderWithDetails.numberBill}</h4>
        <h4>{this.props.orderWithDetails.typePayment}</h4>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.dashboardReducer;
}

export default connect(mapStateToProps)(withStyles(style)(OrdersDetailPage));