import { actionNames } from '../utils/constants/actionConstants';

export const defaultState = {
  signUpSuccessfully: false
}

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.signUpSuccessfully:
      return { ...state, signUpSuccessfully: true };
    case actionNames.signUpFail:
      return { ...state, signUpSuccessfully: false };
    default:
      return state;
  }
}

export default authReducer;