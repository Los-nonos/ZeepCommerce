import { isError } from '../../utils/helpers/isError';
import { actionNames } from '../../utils/constants/actionConstants';

class HomeAdapter {
  search = searchResponse => {
    const { status, data } = searchResponse;

    if (!isError(status)) {
      return {
        type: actionNames.loadProductsHomeSuccessfully,
        products: data.products,
        selledProducts: data.selledProducts,
        featuredProducts: data.featuredProducts,
      };
    }

    const { code, details } = data.errors;
    return {
      type: actionNames.loadProductsHomeFail,
      error: {
        code: status,
        type: code,
        errors: details.errors,
      },
    };
  };
}

export default new HomeAdapter();
