import Router from 'next/router';
//import { push } from '../../config/history';

export const redirectTo = path => {
  Router.push(path);
};

export const redirectToWithState = (path, state) => {
  Router.push(path, state);
};

export const pages = {
  home: '/',
  login: '/login',
  products: '/products',
  dashboard: '/dashboard',
  error: '/auth/error',
  closeModal: '/close-modal',
  closePasswordModal: '/close-password-modal',
  closeUpdateModal: '/close-update-modal',
  productsDetails: '/products/details',
  forgotPassword: '/forgot',
  signup: '/signup',
  cart: '/cart',
  orderDetails: '/dashboard/purchases/detail',
  checkout: '/cart/payment',
};
