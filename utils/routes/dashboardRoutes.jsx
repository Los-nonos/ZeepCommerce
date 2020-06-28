import ChangePasswordPage from '../../views/containers/dashboard/change-password';
import { Settings } from '@material-ui/icons';

const routes = [
  {
    path: '/change-password',
    name: 'Cambiar contraseña',
    icon: Settings,
    component: ChangePasswordPage,
    layout: '/dashboard',
  },
];

export default routes;
