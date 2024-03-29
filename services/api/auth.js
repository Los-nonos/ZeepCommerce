// eslint-disable-next-line import/no-cycle
import Api from './api';
import authAdapter from '../adapters/authAdapter';

class Auth {
  logIn = async (username, password) => {
    const body = { username, password };

    let loginResponse;
    try {
      loginResponse = await Api.post('auth/login', body);
    } catch (err) {
      loginResponse = err;
    }

    return authAdapter.login(loginResponse);
  };

  renewToken = async token => {
    const body = { token };

    let response;
    try {
      response = await Api.post('auth/renew-token', body);
    } catch (err) {
      response = err;
    }
    return authAdapter.renewToken(response);
  };

  signUp = async personalInformation => {
    let signUpResponse;
    try {
      signUpResponse = await Api.post('auth/signup', personalInformation);
    } catch (err) {
      signUpResponse = err;
    }

    return authAdapter.signUpAdapter(signUpResponse);
  };
  forgot = async body => {
    let response;
    try {
      response = await Api.post('auth/forgot', body);
    } catch (err) {
      response = err;
    }

    return authAdapter.forgotAdapter(response);
  };
}

export default new Auth();
