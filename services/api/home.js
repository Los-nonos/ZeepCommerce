import Api from './api';
import homeAdapter from '../adapters/homeAdapter';

class Home {
  search = async (page) => {
    let response;
    try {
      response = await Api.get(`/search/home?page=${page}`);
    }catch (err) {
      response = err;
    }

    return homeAdapter.search(response);
  };
}

export default new Home();