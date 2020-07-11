import { call, put, all } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import search from '../services/api/search';
import { pages, redirectTo } from '../utils/helpers/redirectTo';
import { actionNames } from '../utils/constants/actionConstants';

export function* loadFilters() {
  yield all([put({ type: actionNames.loadingToggle })]);
  const res = yield call(search.loadFilters);

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

export function* searchProducts(action) {
  const { filters, page, orderBy, order } = action;

  let queryFilters = '';

  /*  filters.currentFilters.forEach(key => {
    const filterName = key;
    const value = filters.currentFilters[key];

    if (filters === "" && value !== "" && value !== []) {
      queryFilters = `${filterName}=${value}`;
    } else if (value !== "" && value !== []) {
      queryFilters = `${queryFilters}&${filterName}=${value}`;
    }
  });*/

  yield all([put({ type: actionNames.loadingToggle })]);
  const res = yield call(search.searchProducts, queryFilters, page, orderBy, order);

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

export function* loadProductsByFilter(action) {
  const { orderBy, order } = action;

  yield all([put({ type: actionNames.loadingToggle })]);
  const res = yield call(search.searchProducts, '', 1, orderBy, order);

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

export function* seeDetails(action) {
  const { slug } = action;

  yield all([put({ type: actionNames.loadingToggle })]);
  const res = yield call(search.seeDetails, slug);

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
    redirectTo(pages.productsDetails);
  }
}
