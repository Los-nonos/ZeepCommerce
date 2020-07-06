import { actionNames } from '../utils/constants/actionConstants';

export function getOrders() {
  return {
    type: actionNames.loadOrders,
  }
}


export function updateCustomer(formValues) {
  return {
    type: actionNames.updateCustomer,
    user: formValues
  };
}


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
