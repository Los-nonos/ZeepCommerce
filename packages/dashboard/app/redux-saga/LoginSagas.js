import { call, put, all } from 'redux-saga/effects';
import auth from '../services/api/auth';
import { actionNames } from '../utils/constants/actionConstants';
import { redirectTo, page } from '../utils/helpers/redirectTo';

export function* login(action) {
  const { username, password } = action;

  const res = yield call(auth.logIn, username, password);
  if (res.error) {
    yield put(res);
  } else {
    yield all([put(res), put({ type: actionNames.saveSession, token: res.token })]);
    redirectTo(page.dashboard);
  }
}

export function* loginFailed(action) {
  const { error } = action;

  yield all([put({ type: actionNames.loginError, error }), put({ type: actionNames.deleteSession })]);
  redirectTo(page.login);
}
