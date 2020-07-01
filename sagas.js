import { all, takeLatest } from 'redux-saga/effects';
import { actionNames } from './utils/constants/actionConstants';
import { login, loginFailed, signUp } from './redux-saga/LoginSagas';
// eslint-disable-next-line import/no-cycle
import { saveSession, deleteSession, renewToken } from './redux-saga/SessionSagas';
import { checkRoles } from './redux-saga/PermissionsSagas';
import { changePassword } from './actions/UserAccountActions';
import { loadProducts } from './redux-saga/HomeSagas';
import { loadFilters, loadProductsByFilter, searchProducts, seeDetails } from './redux-saga/ProductsSagas';

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
  // takeLatest(actionNames.loadFilters, loadFilters),
];

export default function* rootSaga() {
  yield all(sagas);
}
