import { actionNames } from '../utils/constants/actionConstants';

export function loadingToggle() {
  return {
    type: actionNames.loadingToggle,
  };
}

export function showNotification(message, isError = false, errorCode = 500) {
  return {
    type: actionNames.showNotification,
    message,
    error: isError
      ? {
        code: errorCode,
        detail: message,
      }
      : null,
  };
}
