/* eslint-disable no-restricted-syntax,no-unused-vars */
import { put, select } from 'redux-saga/effects';
import { pages, redirectTo } from '../utils/helpers/redirectTo';
// eslint-disable-next-line import/no-cycle
import authStorage from '../services/localStorage/authStorage';

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
  const roles = authStorage.getRoles();
  const userRoles = roles.split(',');
  if (!userRoles) {
    put({
      type: 'HANDLE_ERROR',
      error: {
        code: '401',
        errors: 'You must have logged in for access to this page',
        typeError: 'Unauthorized',
      },
    });
    redirectTo(pages.error);
  } else if (!isUserAllowed(userRoles, action.roles)) {
    yield put({
      type: 'HANDLE_ERROR',
      error: {
        code: '403',
        errors: "You don't have the permissions to access this page",
        type: 'Forbidden',
      },
    });
    redirectTo(pages.error);
  }
}
