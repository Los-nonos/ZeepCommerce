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
    const { code, details } = data;

    return {
      type: actionNames.loginFailed,
      error: {
        code: status,
        type: code,
        errors: details.errors,
      },
    };
  };
}

export default new AuthAdapter();
