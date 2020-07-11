import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  changePasswordModalShow: false,
  formValues: {},
  formErrors: {},
  orders: [],
  orderWithDetails: {},
  cart: {},
};

const dashboardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.showChangePasswordModal:
      return { ...state, changePasswordModalShow: true };
    case actionNames.closeChangePasswordModal:
      return { ...state, changePasswordModalShow: false };
    case actionNames.loadOrdersFail:
      return { ...state, orders: [] };
    case actionNames.loadOrdersSuccessfully:
      return { ...state, orders: action.orders };
    case actionNames.loadOrderByUuidSuccessfully:
      return { ...state, orderWithDetails: action.orderWithDetails };
    case actionNames.loadOrderByUuidFail:
      return { ...state, orderWithDetails: {} };
    case actionNames.addProductInCartSuccessfully:
      return { ...state, cart: { productsNumber: action.productsNumber } };
    case actionNames.addProductInCartFail:
      return { ...state };
    case actionNames.removeProductInCartSuccessfully:
      return { ...state, cart: { productsNumber: action.productsNumber } };
    case actionNames.removeProductInCartFail:
      return { ...state };
    default:
      return state;
  }
};

export default dashboardReducer;
