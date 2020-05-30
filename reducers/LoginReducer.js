import { actionNames } from '../utils/constants/actionConstants';

const stateDefault = {
  loggedIn: false,
  userData: null,
  error: { errors: {} },
  changePasswordModalShow: false,
};

const loginReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case actionNames.loggedIn:
      return { ...state, loggedIn: true, userData: action.user, error: { errors: {} } };
    case actionNames.loginError:
      return { ...state, error: action.error, loggedIn: false, userData: null };
    case actionNames.showChangePasswordModal:
      return { ...state, changePasswordModalShow: true };
    case actionNames.closeChangePasswordModal:
      return { ...state, changePasswordModalShow: false };
    default:
      return state;
  }
};

export default loginReducer;
