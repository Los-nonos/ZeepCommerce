import * as React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import GridItem from '../../components/Atoms/Grid/GridItem';
import OrderCard from '../../components/Molecules/OrdersCard/OrderCard';
import * as actions from '../../../actions/DashboardActions';
import {connect} from 'react-redux';

class OrdersListPage extends React.Component {

  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.loadOrders();
  }

  loadOrders = () => {
    this.dispatch(actions.getOrders());
  }

  getOrderList = () => {
    return this.props.orders.map((order, key) => {
      return (
        <GridItem md={10} sm={10} key={key}>
          <OrderCard order={order}/>
        </GridItem>
      );
    });
  };

  render() {
    return (
      <DashboardLayout>
        {this.getOrderList()}
      </DashboardLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.dashboardReducer;
}

export default connect(mapStateToProps)(OrdersListPage);