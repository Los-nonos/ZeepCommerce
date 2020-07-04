import { isError } from '../../utils/helpers/isError';
import { actionNames } from '../../utils/constants/actionConstants';

class DashboardAdapter {
  getOrders = (response) => {
    const { status, data } = response;

    if (!isError(status)) {
      return {
        type: actionNames.loadOrdersSuccessfully,
        orders: data.data
      };
    }
    const { error } = data;

    return {
      type: actionNames.loadOrdersFail,
      error: {
        code: status,
        type: null,
        errors: error,
      },
    };
  }

  getUserByIdAdapt = (response) => {
    const { status, data } = response;

    if (!isError(status)) {
      return {
        type: actionNames.loadUserSuccessfully,
        user: data.data,
      };
    }
    const { error } = data;

    return {
      type: actionNames.loadUserFail,
      error: {
        code: status,
        type: null,
        errors: error,
      },
    };
  }
}

export default new DashboardAdapter();