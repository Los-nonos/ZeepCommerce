import { actionNames } from '../utils/constants/actionConstants';

export function removeProduct(id) {
  return {
    type: actionNames.removeProductInCart,
    id
  };
}


export function loadProductsFromShoppingCart() {
  return {
    type: actionNames.loadProductsFromShoppingCart,
  };
}


export function addProductQuantityFromShoppingCart(id) {
  return {
    type: actionNames.addProductQuantityFromCart,
    id
  };
}


export function removeProductQuantityFromShoppingCart(id) {
  return {
    type: actionNames.removeProductQuantityFromCart,
    id
  };
}


export function mercadoPagoSelected() {
  return {
    type: actionNames.mercadoPagoSelected,
  };
}

export function getOrders() {
  return {
    type: actionNames.loadOrders,
  };
}

export function updateCustomer(formValues) {
  return {
    type: actionNames.updateCustomer,
    user: formValues,
  };
}

export function getUserById(id) {
  return {
    type: actionNames.loadUserById,
    id,
  };
}

export function checkRoles(roles) {
  return {
    type: actionNames.checkRoles,
    roles,
  };
}

export function getOrder(uuid) {
  return {
    type: actionNames.loadOrderByUuid,
    uuid,
  };
}
