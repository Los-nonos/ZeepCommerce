import { actionNames } from '../utils/constants/actionConstants';

const stateDefault = {
  changePasswordModalShow: false,
};

const userAccountReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case actionNames.showChangePasswordModal:
      return { ...state, changePasswordModalShow: true };
    case actionNames.closeChangePasswordModal:
      return { ...state, changePasswordModalShow: false };
    default:
      return state;
  }
};

export default userAccountReducer;
