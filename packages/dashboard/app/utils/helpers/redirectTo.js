import { push } from '../../redux/config/history';

export const redirectTo = path => {
  push(path);
};

export const page = {
  login: '/auth/login-page',
  rooftoppers: '/dashboard-website/rooftoppers',
  dashboard: '/dashboard-website/',
};
