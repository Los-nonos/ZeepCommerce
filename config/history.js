import { createBrowserHistory } from 'history';

const isServer = process.browser;

let history;
if(isServer) {
  history = {};
} else {
  history = createBrowserHistory();
  // history = {};
}

export default history;
export const { push } = history;