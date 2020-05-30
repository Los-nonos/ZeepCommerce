import { call, put, all } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import auth from '../services/api/auth';
import { actionNames } from '../utils/constants/actionConstants';
import { redirectTo, redirectToWithState, pages } from '../utils/helpers/redirectTo';

export function* login(action) {
  const { username, password } = action;

  yield all([put({ type: 'LOADING_TOGGLE' })]);
  const res = yield call(auth.logIn, username, password);

  if (res.error) {
    yield all([put(res), put({ type: 'LOADING_TOGGLE' })]);
  } else {
    yield all([
      put(res),
      put({ type: 'LOADING_TOGGLE' }),
      put({ type: actionNames.saveSession, token: res.token, roles: res.user.roles }),
    ]);
    redirectToWithState(pages.dashboard, { previousPath: 'login' });
  }
}

export function* loginFailed(action) {
  const { error } = action;

  yield all([put({ type: actionNames.loginError, error }), put({ type: actionNames.deleteSession })]);
  redirectTo(pages.login);
}
