/* eslint-disable no-restricted-syntax,no-unused-vars */
import { call, put, all, select } from 'redux-saga/effects';
import { page, redirectTo } from '../utils/helpers/redirectTo';

const isLogged = state => state.login.loggedIn;

const getUserData = state => state.login.userData;

function isUserAllowed(userRoles, allowedRoles) {
  for (const userRol of userRoles) {
    for (const allowedRole of allowedRoles) {
      if (userRol === allowedRole) {
        return true;
      }
    }
  }
  return false;
}

export function* checkRoles(action) {
  if (!(yield select(isLogged))) {
    redirectTo(page.login);
  } else {
    const user = yield select(getUserData);
    if (!isUserAllowed(user.roles, action.roles)) {
      redirectTo(page.login);
    }
  }
}
