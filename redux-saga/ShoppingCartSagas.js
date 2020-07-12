import { actionNames } from '../utils/constants/actionConstants';
import { select, call, all, put } from 'redux-saga/effects';
import cartStorage from '../services/localStorage/cartStorage';
import dashboard from '../services/api/dashboard';
import { pages, redirectTo } from '../utils/helpers/redirectTo';

const getProductsCart = state => { return state.dashboardReducer.cart.productsSaved };

export function* addProductQuantityFromCart(action) {
  const { id } = action;
  const productsSaved = yield select(getProductsCart);

  let products = productsSaved.map(product => {
    if(product.id === id) {
      product.quantity += 1;
      return product;
    }
    return product;
  })

  yield all([
    put({ type: actionNames.saveProductsCart, products }), //TODO: change for function in actions
    put({
      type: actionNames.addProductQuantityFromCartSuccessfully,
      products
    }),
  ]);
}

export function* removeProductQuantityFromCart(action) {
  const { id } = action;
  const productsSaved = yield select(getProductsCart);

  let products = productsSaved.map(product => {
    if(product.id === id) {
      if(product.quantity === 1) {
        return undefined;
      }
      else {
        product.quantity -= 1;
        return product;
      }
    }
    return product;
  });

  yield all([
    put({type: actionNames.saveProductsCart, products}),
    put({
      type: actionNames.removeProductQuantityFromCartSuccessfully,
      products,
    })
  ]);
}

export function* getProductsFromShoppingCart(action) {
  const productsSaved = cartStorage.getProducts();
  yield put({type: actionNames.loadingToggle});
  const res = yield call(dashboard.getProductsFromShoppingCart, productsSaved);

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
  } else {
    yield all([
      put(res),
      put({type: actionNames.loadingToggle})
    ]);
  }
}

export function* saveProductsInLocalStorage(action) {
  const { products } = action;

  const productsToSave = products.map(product => {
    return {
      id: product.id,
      quantity: product.quantity,
    };
  });

  cartStorage.saveProducts(productsToSave);
}

export function* addProductInShoppingCart(action) {
  const { id } = action;

  const products = yield select(getProductsCart);

  products.push({ id, quantity: 1 });

  yield all([
    put({type: actionNames.saveProductsCart, products })
  ]);
}