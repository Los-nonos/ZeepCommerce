import { all, takeLatest } from 'redux-saga/effects';
import { actionNames } from './utils/constants/actionConstants';
import { login, loginFailed } from './redux-saga/LoginSagas';
// eslint-disable-next-line import/no-cycle
import { saveSession, deleteSession, renewToken } from './redux-saga/SessionSagas';
import { checkRoles } from './redux-saga/PermissionsSagas';
import { changePassword } from './actions/UserAccountActions';

const sagas = [
  takeLatest(actionNames.login, login),
  takeLatest(actionNames.saveSession, saveSession),
  takeLatest(actionNames.deleteSession, deleteSession),
  // takeLatest(actionNames.loadFilters, loadFilters),
  // takeLatest(actionNames.search, searchProducts),
  takeLatest(actionNames.renewToken, renewToken),
  takeLatest(actionNames.loginFailed, loginFailed),
  takeLatest(actionNames.checkRoles, checkRoles),
  takeLatest(actionNames.changePassword, changePassword),
];

export default function* rootSaga() {
  yield all(sagas);
}
