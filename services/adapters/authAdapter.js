import { isError } from '../../utils/helpers/isError';
import { actionNames } from '../../utils/constants/actionConstants';

class AuthAdapter {
  login = response => {
    const { status, data } = response;

    if (!isError(status)) {
      const { token } = data;
      delete data.token;

      return {
        type: actionNames.loggedIn,
        token,
        user: data.user,
      };
    }
    const { error } = data;

    return {
      type: actionNames.loginFailed,
      error: {
        code: status,
        type: null,
        errors: error,
      },
    };
  };

  renewToken = response => {
    const { status, data } = response;

    if (!isError(status)) {
      const { token } = data;
      delete data.token;

      return {
        type: actionNames.renewToken,
        token,
      };
    }
    const { error } = data;

    return {
      type: actionNames.loginFailed,
      error: {
        code: status,
        type: null,
        errors: error,
      },
    };
  };

  signUpAdapter = response => {
    const { status, data } = response;

    if (!isError(status)) {
      return {
        type: actionNames.signUpSuccessfully,
      };
    }
    const { error } = data;

    return {
      type: actionNames.signUpFail,
      error: {
        code: status,
        type: null,
        errors: error,
      },
    };
  }

  changePassword = response => {
    const { status, data } = response;

    if (!isError(status)) {
      return {
        type: actionNames.passwordChangedSuccessfully,
        message: 'Contraseña cambiada exitosamente',
      };
    }
    const { error } = data;

    return {
      type: actionNames.passwordChangedFail,
      error: {
        code: status,
        type: null,
        errors: error,
      },
    };
  }
}

export default new AuthAdapter();
