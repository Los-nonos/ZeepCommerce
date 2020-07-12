import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  changePasswordModalShow: false,
  formValues: {},
  formErrors: {},
  orders: [],
  orderWithDetails: {},
  cart: {
    productsSaved: [],
  },
  paymentMethods: {
    mercadoPago: false,
  },
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
    case actionNames.mercadoPagoSelected:
      return {
        ...state,
        paymentMethods: {
          mercadoPago: true,
        },
      };
    case actionNames.removeProductQuantityFromCartSuccessfully:
      return { ...state, cart: { productsSaved: action.products } };
    case actionNames.addProductQuantityFromCartSuccessfully:
      return { ...state, cart: { productsSaved: action.products } };
    case actionNames.loadProductsFromShoppingCartSuccessfully:
      return {...state, cart: { productsSaved: action.products }};
    case actionNames.loadProductsFromShoppingCartFail:
      return { ...state, cart: { productsSaved: [] }};
    default:
      return state;
  }
};

export default dashboardReducer;
