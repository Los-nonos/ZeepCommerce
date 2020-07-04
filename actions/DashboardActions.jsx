import { actionNames } from '../utils/constants/actionConstants';

export function getUserById(id) {
  return {
    type: actionNames.loadUserById,
    id
  };
}


export function checkRoles(roles) {
  return {
    type: actionNames.checkRoles,
    roles,
  };
}
