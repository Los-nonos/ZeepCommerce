import { call, put, all } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import auth from '../services/api/auth';
import { actionNames } from '../utils/constants/actionConstants';
import { redirectTo, pages } from '../utils/helpers/redirectTo';

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
    redirectTo(pages.home);
  }
}

export function* loginFailed(action) {
  const { error } = action;

  yield all([put({ type: actionNames.loginError, error }), put({ type: actionNames.deleteSession })]);
  redirectTo(pages.login);
}

export function* signUp(action) {
  const { name, surname, email, username, password } = action;

  const body = {
    name,
    surname,
    email,
    username,
    password
  }

  yield all([put({ type: 'LOADING_TOGGLE' })]);
  const res = yield call(auth.signUp, body);

  if (res.error) {
    yield all([put(res), put({ type: 'LOADING_TOGGLE' })]);
  } else {
    yield all([
      put(res),
      put({ type: 'LOADING_TOGGLE' }),
    ]);
    redirectTo(pages.home);
  }
}