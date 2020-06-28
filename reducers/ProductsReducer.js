import { actionNames } from "../utils/constants/actionConstants";

export const stateDefault = {
  filters: {
    categoryName: [],
    filterNames: [],
    filterOptions: [],
    valueFilterOption: "",
    query: ""
  },
  products: [],
  productWithDetails: {},
  page: 1,
  totalPages: 1
};

const searchReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case actionNames.loadFiltersSuccesful:
      return {
        ...state,
        filters: {
          categoryName: action.body.categories,
          filterName: action.body.filterNames,
          filterOption: action.body.filterOptions
        }
      };
    case actionNames.loadFiltersFail:
      return { ...state };
    case actionNames.loadProductsByFilterSuccessfully:
      return {
        ...state,
        products: action.products,
        totalPages: action.totalPages
      };
    case actionNames.loadProductsByFilterFail:
      return { ...state, products: [] };
    case actionNames.nextSearchPage:
      if (state.page + 1 <= state.totalPages) {
        return { ...state, page: state.page + 1 };
      }
      return { ...state, page: state.page };
    case actionNames.previousSearchPage:
      if (state.page - 1 > 0) {
        return { ...state, page: state.page - 1 };
      }
      return { ...state, page: state.page };
    case actionNames.selectSearchPage:
      return { ...state, page: action.page };
    case actionNames.loadProductsWithDetailsSuccesful:
      return { ...state, productWithDetails: action.productWithDetails };
    case actionNames.loadProductWithDetailsFail:
      return { ...state, productWithDetails: {} };
    default:
      return state;
  }
};

export default searchReducer;
