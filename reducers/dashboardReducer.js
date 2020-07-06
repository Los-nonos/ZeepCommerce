import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  changePasswordModalShow: false,
  formValues: {},
  formErrors: {},
  orders: [],
};

const dashboardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.showChangePasswordModal:
      return { ...state, changePasswordModalShow: true };
    case actionNames.closeChangePasswordModal:
      return { ...state, changePasswordModalShow: false };
    case actionNames.loadOrdersFail:
      return {...state, orders:[]};
    case actionNames.loadOrdersSuccessfully:
      return {...state, orders:action.orders}
    default:
      return state;
  }
}

export default dashboardReducer;