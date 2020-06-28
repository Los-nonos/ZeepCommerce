import Api from './api';
import dashboardAdapter from '../adapters/dashboardAdapter';

class Dashboard {
  getOrders = async (userId) => {
    let response;
    try {
      response = await Api.get(`/orders?userId=${userId}`);
    }catch (err) {
      response = err;
    }

    return dashboardAdapter.getOrders(response);
  }
}

export default new Dashboard();