import { actionNames } from '../utils/constants/actionConstants';

export function showChangePasswordModal() {
  return {
    type: actionNames.showChangePasswordModal,
  };
}

export function closeChangePasswordModal() {
  return {
    type: actionNames.closeChangePasswordModal,
  };
}

export function changePassword(userData) {
  return {
    type: actionNames.changePassword,
    data: userData,
  };
}

export function closeNotification() {
  return {
    type: actionNames.closeNotification,
  };
}
