import { all, takeEvery } from 'redux-saga/effects';
import { login, loginFailed } from '../LoginSagas';
// eslint-disable-next-line import/no-cycle
import { saveSession, deleteSession, renewToken } from '../SessionSagas';
import { actionNames } from '../../utils/constants/actionConstants';
/* eslint-disable import/no-cycle */
import { checkRoles } from '../permissionsSgas';

function* sagas() {
  yield takeEvery(actionNames.login, login);
  yield takeEvery(actionNames.saveSession, saveSession);
  yield takeEvery(actionNames.deleteSession, deleteSession);
  yield takeEvery(actionNames.renewToken, renewToken);
  yield takeEvery(actionNames.loginFailed, loginFailed);
  yield takeEvery(actionNames.checkRoles, checkRoles);
}

export default function* rootSaga() {
  yield all([sagas()]);
}
