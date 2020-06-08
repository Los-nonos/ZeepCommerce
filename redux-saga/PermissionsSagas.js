/* eslint-disable no-restricted-syntax */
import { select } from 'redux-saga/effects';
import { pages, redirectTo } from '../utils/helpers/redirectTo';

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
    redirectTo(pages.login);
  } else {
    const user = yield select(getUserData);
    if (!isUserAllowed(user.roles, action.roles)) {
      redirectTo(pages.login);
    }
  }
}
