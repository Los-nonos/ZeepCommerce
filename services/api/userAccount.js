import Api from './api';
import userAccountAdapter from '../adapters/authAdapter';

class UserAccount {
  changePassword = async (id, oldPassword, newPassword) => {
    const body = { id, oldPassword, newPassword };
    let response;

    try
    {
      response = await Api.post('auth/change-password', body);
    } catch (err) {
      response = err;
    }

    return userAccountAdapter.changePassword(response);
  }
}

export default new UserAccount();