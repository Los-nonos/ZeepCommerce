import { actionNames } from '../utils/constants/actionConstants';

export const defaultState = {
  featuredProducts: [],
  selledProducts: [],
  products: [],
}

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.loadProductsHomeSuccessfully:
      return { ...state,
        products: action.products,
        selledProducts: action.selledProducts,
        featuredProducts: action.featuredProducts
      };
    case actionNames.loadProductsHomeFail:
      return { ...state, products: [], featuredProducts: [], selledProducts: [] };
    default:
      return state;
  }
}

export default homeReducer;