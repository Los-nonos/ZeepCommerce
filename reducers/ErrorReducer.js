import { actionNames } from '../utils/constants/actionConstants';

const stateDefault = {
  errorHandler: {
    code: '404',
    errors: '',
    typeError: 'Page not found',
  },
};

const errorReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case actionNames.handleError:
      return Object.assign({}, state, {
        errorHandler: {
          code: action.error.code,
          errors: action.error.errors,
          typeError: action.error.type,
        },
      });
    default:
      return state;
  }
};

export default errorReducer;
