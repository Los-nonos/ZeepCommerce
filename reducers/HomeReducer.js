import { actionNames } from '../utils/constants/actionConstants';

export const defaultState = {
  featuredProducts: [],
  selledProducts: [],
  products: [],
}

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.loadProductsSuccessfully:
      return { ...state,
        products: action.products,
        selledProducts: action.selledProducts,
        featuredProducts: action.featuredProducts
      };
    case actionNames.loadProductsFail:
      return { ...state, products: [], featuredProducts: [], selledProducts: [] };
    default:
      return state;
  }
}

export default homeReducer;