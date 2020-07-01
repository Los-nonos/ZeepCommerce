import { Person, Settings, ShoppingBasket } from '@material-ui/icons';

const routes = [
  {
    path: '/change-password',
    name: 'Cambiar contraseña',
    icon: Settings,
    layout: '/dashboard',
  },
  {
    path: '/account',
    name: 'Cuenta',
    icon: Person,
    layout: '/dashboard',
  },
  {
    path: '/purchases/list',
    name: 'Compras',
    icon: ShoppingBasket,
    layout: '/dashboard',
  },
];

export default routes;
