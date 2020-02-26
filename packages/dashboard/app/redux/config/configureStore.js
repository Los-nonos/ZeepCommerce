import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducers from './combineReducers';
// eslint-disable-next-line import/no-cycle
import rootSaga from '../../redux-saga/config/sagas';

const isProd = process.env.NODE_ENV === 'production';

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  let middlewares;

  const sagaMiddleware = createSagaMiddleware();

  if (!isProd) {
    const loggerMiddleware = createLogger({
      stateTransformer(state) {
        return state;
      },
    });

    middlewares = [sagaMiddleware, routerMiddleware(history), loggerMiddleware];
  } else {
    middlewares = [sagaMiddleware, routerMiddleware(history)];
  }

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Prevent recomputing reducers for `replaceReducer`
          shouldHotReload: false,
        })
      : compose;
  /* eslint-enable */

  const store = createStore(reducers(), initialState, composeEnhancers(...enhancers));

  sagaMiddleware.run(rootSaga);

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./combineReducers', () => {
      store.replaceReducer(reducers(store.injectedReducers));
      store.dispatch({ type: '@@REDUCER_INJECTED' });
    });
  }

  return store;
}
