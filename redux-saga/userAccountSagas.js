import { all, call, put } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import userAccount from '../services/api/userAccount';
import { actionNames } from '../utils/constants/actionConstants';
import { pages, redirectTo } from '../utils/helpers/redirectTo';

export function* changePassword(action) {
  const { data } = action;

  if (data.newPassword !== data.newPasswordConfirmation) {
    yield all([
      put({
        type: actionNames.showNotification,
        error: {
          code: 422,
          type: 'UNPROCESSABLE ENTITY',
          detail: 'New password and Confirm new password must match',
        },
      }),
    ]);
  } else {
    yield all([put({ type: actionNames.loadingToggle })]);
    const res = yield call(userAccount.changePassword, data);

    if (res.error) {
      if (res.error.code === 401 || res.error.code === 403) {
        yield all([put({ type: actionNames.handleError, error: res.error })]);
        redirectTo(pages.error);
      }
      yield all([
        put(res),
        put({ type: actionNames.loadingToggle }),
        put({ type: actionNames.showNotification, error: res.error }),
      ]);
    } else {
      yield all([
        put(res),
        put({ type: actionNames.loadingToggle }),
        put({ type: actionNames.closeChangePasswordModal }),
        put({ type: actionNames.showNotification, message: res.message }),
      ]);
      redirectTo(pages.closePasswordModal);
    }
  }
}
