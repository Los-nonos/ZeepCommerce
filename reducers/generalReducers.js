import { actionNames } from '../utils/constants/actionConstants';

const stateDefault = {
  loading: false,
  error: { errors: {} },
  formErrors: {},
  notification: false,
  notificationColor: '',
  message: '',
};

const generalReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case actionNames.loadingToggle:
      return { ...state, loading: !state.loading };
    case actionNames.closeNotification:
      return {
        ...state,
        notification: false,
        message: '',
        notificationColor: '',
        error: { errors: {} },
        formErrors: {},
      };
    case actionNames.showNotification:
      return {
        ...state,
        notification: true,
        message: action.error ? `Error ${action.error.code}, ${action.error.detail}` : action.message,
        error: action.error ? action.error : { errors: {} },
        formErrors: action.error && action.error.formErrors ? action.error.formErrors : {},
        notificationColor: action.error ? 'danger' : 'success',
      };
    default:
      return state;
  }
};

export default generalReducer;
