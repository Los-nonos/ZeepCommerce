import localStorageService from './localStorageService';
import auth from '../api/auth';
import { actionNames } from '../../utils/constants/actionConstants';
// eslint-disable-next-line import/no-cycle
import { dispach } from '../../app';
import jwt from '../externalsModules/jwt';

class AuthStorage {
  setSession = token => {
    localStorageService.set('auth-token', token);
  };

  getSession = () => {
    localStorageService.get('auth-token');
  };

  deleteSession = () => {
    localStorageService.remove('auth-token');
  };

  renewToken = async token => {
    const context = this;
    setTimeout(async function() {
      const response = await auth.renewToken(token);
      if (response.type === actionNames.renewToken) {
        context.setSession(response.token);
      }
      dispach(response);
    }, (jwt.expiresIn(token) - 3550) * 1000);
  };
}

export default new AuthStorage();
