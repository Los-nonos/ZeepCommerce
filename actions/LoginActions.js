import { actionNames } from '../utils/constants/actionConstants';

export function login(username, password) {
  return {
    type: actionNames.login,
    username,
    password,
  };
}

export function deleteSession() {
  return {
    type: actionNames.deleteSession,
  };
}

export function renewToken() {
  return {
    type: actionNames.renewToken,
  };
}
