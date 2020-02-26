import { isError } from '../../utils/helpers/isError';
import { actionNames } from '../../utils/constants/actionConstants';

class AuthAdapter {
  login = response => {
    const { status, data } = response;

    if (!isError(status)) {
      const { token } = data.data;
      delete data.data.token;

      return {
        type: actionNames.loggedIn,
        token,
        user: data.data,
      };
    }
    const { code, details } = data.errors;

    return {
      type: actionNames.loginFailed,
      error: {
        code: status,
        type: code,
        errors: details.errors,
      },
    };
  };

  renewToken = response => {
    const { status, data } = response;

    if (!isError(status)) {
      const { token } = data.data;
      delete data.data.token;

      return {
        type: actionNames.renewToken,
        token,
      };
    }
    const { code, details } = data.errors;

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
