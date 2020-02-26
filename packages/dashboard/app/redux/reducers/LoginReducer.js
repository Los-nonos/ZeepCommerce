import { actionNames } from '../../utils/constants/actionConstants';

const stateDefault = {
  loggedIn: false,
  userData: null,
  error: {
    code: '',
    type: '',
    errors: '',
  },
};

const loginReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case actionNames.loggedIn:
      return Object.assign({}, state, {
        loggedIn: true,
        userData: action.user,
      });
    case actionNames.loginError:
      return Object.assign({}, state, {
        error: action.error,
        loggedIn: false,
        userData: null,
      });
    default:
      return state;
  }
};

export default loginReducer;
