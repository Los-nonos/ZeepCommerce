import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {

};


const dashboardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.changePassword:
      return {
        ...state
      };
    default:
      return state;
  }
}

export default dashboardReducer;