import { all, takeLatest } from 'redux-saga/effects';
import { actionNames } from './utils/constants/actionConstants';
import { login, loginFailed, signUp } from './redux-saga/LoginSagas';
// eslint-disable-next-line import/no-cycle
import { saveSession, deleteSession, renewToken } from './redux-saga/SessionSagas';
import { checkRoles } from './redux-saga/PermissionsSagas';
import { changePassword } from './redux-saga/userAccountSagas';
import { loadProducts } from './redux-saga/HomeSagas';
import { loadFilters, loadProductsByFilter, searchProducts, seeDetails } from './redux-saga/ProductsSagas';
import { getOrderByUuid, getOrders, getUserById } from './redux-saga/DashboardSagas';
import {
  addProductInShoppingCart,
  addProductQuantityFromCart, getProductsFromShoppingCart,
  removeProductQuantityFromCart,
  saveProductsInLocalStorage,
} from './redux-saga/ShoppingCartSagas';

const sagas = [
  takeLatest(actionNames.login, login),
  takeLatest(actionNames.saveSession, saveSession),
  takeLatest(actionNames.deleteSession, deleteSession),
  takeLatest(actionNames.search, searchProducts),
  takeLatest(actionNames.loadProducts, loadProductsByFilter),
  takeLatest(actionNames.loadProductsForHome, loadProducts),
  takeLatest(actionNames.renewToken, renewToken),
  takeLatest(actionNames.loginFailed, loginFailed),
  takeLatest(actionNames.checkRoles, checkRoles),
  takeLatest(actionNames.changePassword, changePassword),
  takeLatest(actionNames.loadFilters, loadFilters),
  takeLatest(actionNames.seeDetails, seeDetails),
  takeLatest(actionNames.signUp, signUp),
  takeLatest(actionNames.loadUserById, getUserById),
  takeLatest(actionNames.loadOrders, getOrders),
  takeLatest(actionNames.loadOrderByUuid, getOrderByUuid),
  takeLatest(actionNames.removeProductQuantityFromCart, removeProductQuantityFromCart),
  takeLatest(actionNames.addProductQuantityFromCart, addProductQuantityFromCart),
  takeLatest(actionNames.saveProductsCart, saveProductsInLocalStorage),
  takeLatest(actionNames.addProductInShoppingCart, addProductInShoppingCart),
  takeLatest(actionNames.loadProductsFromShoppingCart, getProductsFromShoppingCart),
];

export default function* rootSaga() {
  yield all(sagas);
}
