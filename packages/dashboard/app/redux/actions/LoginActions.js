import { actionNames } from '../../utils/constants/actionConstants';

export function login(username, password) {
  return {
    type: actionNames.login,
    username,
    password,
  };
}
