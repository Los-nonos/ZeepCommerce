import Login from '@material-ui/icons/LockOpen';
// core components/views for Admin layout
import LoginPage from '../pages/Login/LoginPage.jsx';

const dashboardRoutes = [
  {
    path: '/login-page',
    name: 'Login Page',
    icon: Login,
    component: LoginPage,
    layout: '/auth',
  },
];

export default dashboardRoutes;
