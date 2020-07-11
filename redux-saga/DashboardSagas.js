import { call, put, all } from 'redux-saga/effects';
import { actionNames } from '../utils/constants/actionConstants';
import dashboard from '../services/api/dashboard';
import { pages, redirectTo } from '../utils/helpers/redirectTo';


export function* getOrders(action) {
  const { userId } = action;
  const res = yield call(dashboard.getOrders, userId);

  if(res.error) {
    if (res.error.code === 401 || res.error.code === 403) {
      yield all([put({ type: actionNames.handleError, error: res.error })]);
      redirectTo(pages.error);
    }
    yield all([
      put(res),
      put({ type: actionNames.loadingToggle }),
      put({ type: actionNames.showNotification, error: res.error }),
    ]);
  }else {
    yield all([
      put(res),
      put({ type: actionNames.loadingToggle }),
    ])
  }
}

export function* getUserById(action) {
  const { id } = action;
  const res = yield call(dashboard.getUserById, id);

  if(res.error) {
    if (res.error.code === 401 || res.error.code === 403) {
      yield all([put({ type: actionNames.handleError, error: res.error })]);
      redirectTo(pages.error);
    }
    yield all([
      put(res),
      put({ type: actionNames.loadingToggle }),
      put({ type: actionNames.showNotification, error: res.error }),
    ]);
  }
  else {
    yield all([
      put(res),
      put({ type: actionNames.loadingToggle }),
    ]);
  }
}

export function* getOrderByUuid(action) {
  const { uuid } = action;
  const res = yield call(dashboard.getOrderByUuid, uuid);

  if(res.error) {
    if (res.error.code === 401 || res.error.code === 403) {
      yield all([put({ type: actionNames.handleError, error: res.error })]);
      redirectTo(pages.error);
    }
    yield all([
      put(res),
      put({ type: actionNames.loadingToggle }),
      put({ type: actionNames.showNotification, error: res.error }),
    ]);
  }else {
    yield all([
      put(res),
      put({ type: actionNames.loadingToggle }),
    ])
    redirectTo(pages.orderDetails);
  }
}