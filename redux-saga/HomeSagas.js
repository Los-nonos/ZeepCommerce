import { call, all, put } from 'redux-saga/effects';
import home from '../services/api/home';
import { actionNames } from '../utils/constants/actionConstants';
import { pages, redirectTo } from '../utils/helpers/redirectTo';

export function* loadProducts(action) {
  const { page } = action;

  const res = yield call(home.search, page);

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
    yield all([put(res), put({ type: actionNames.loadingToggle })]);
  }
}
