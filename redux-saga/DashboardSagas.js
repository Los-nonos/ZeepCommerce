import { call, put, all } from 'redux-saga/effects';
import { actionNames } from '../utils/constants/actionConstants';
import dashboard from '../services/api/dashboard';


export function* getOrders(action) {
  const { userId } = action;
  const res = yield call(dashboard.getOrders, userId);

  if(res.error) {

  }else {
    yield all([
      put(res),
      put({ type: actionNames.loadingToggle }),
    ])
  }
}