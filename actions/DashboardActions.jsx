import { actionNames } from '../utils/constants/actionConstants';

export function checkRoles(roles) {
  return {
    type: actionNames.checkRoles,
    roles,
  };
}
