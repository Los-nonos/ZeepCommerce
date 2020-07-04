import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  changePasswordModalShow: false,
  formValues: {},
  formErrors: {},
};

const dashboardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.showChangePasswordModal:
      return { ...state, changePasswordModalShow: true };
    case actionNames.closeChangePasswordModal:
      return { ...state, changePasswordModalShow: false };
    default:
      return state;
  }
}

export default dashboardReducer;