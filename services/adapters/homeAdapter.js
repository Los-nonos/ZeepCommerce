import { isError } from '../../utils/helpers/isError';
import { actionNames } from '../../utils/constants/actionConstants';

class HomeAdapter {
  search = (searchResponse) => {
    const { status, data } = searchResponse;

    if (!isError(status)) {
      return {
        type: actionNames.loadProductsSuccessfully,
        products: data.items,
        totalPages: data.pageCount,
      };
    }

    const { code, details } = data.errors;
    return {
      type: actionNames.loadProductsFail,
      error: {
        code: status,
        type: code,
        errors: details.errors
      }
    };
  }
}

export default new HomeAdapter();