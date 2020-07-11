import { combineReducers } from 'redux';
import injectedReducers from '../injectedReducers';
//import history from './history';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    //router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
