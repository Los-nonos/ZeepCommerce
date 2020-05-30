import { call, put } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import authStorage from '../services/localStorage/authStorage';
import { actionNames } from '../utils/constants/actionConstants';

export function* saveSession(action) {
  const { token, roles } = action;
  yield call(authStorage.setSession, token, roles);
  yield put({ type: actionNames.renewToken, token });
}

export function* deleteSession() {
  yield call(authStorage.deleteSession);
}

export function* renewToken(action) {
  yield call(authStorage.renewToken, action.token);
}
