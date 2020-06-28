// eslint-disable-next-line import/no-cycle
import Api from "./api";
import searchAdapter from "../adapters/searchAdapter";

class Search {
  loadFilters = async () => {
    let loadResponse;
    try {
      loadResponse = await Api.get(`categories/`);
    } catch (err) {
      loadResponse = err;
    }

    return searchAdapter.loadFilters(loadResponse);
  };

  searchProducts = async (query, page, orderBy, order) => {
    let searchResponse;
    try {
      searchResponse = await Api.get(
        `/search?page=${page}&orderBy=${orderBy}:${order}&${query}`
      );
    } catch (err) {
      searchResponse = err;
    }
    return searchAdapter.searchProducts(searchResponse);
  };

  seeDetails = async uuid => {
    let seeDetailsResponse;
    try {
      seeDetailsResponse = await Api.get(`products/${uuid}`);
    } catch (err) {
      seeDetailsResponse = err;
    }
    return searchAdapter.seeDetails(seeDetailsResponse);
  };
}

export default new Search();
