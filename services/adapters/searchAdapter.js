import { isError } from "../../utils/helpers/isError";
import { actionNames } from "../../utils/constants/actionConstants";

class SearchAdapter {
  loadFilters = loadResponse => {
    const { status, data } = loadResponse;

    if (!isError(status)) {
      return {
        type: actionNames.loadFiltersSuccesful,
        body: data.data
      };
    }

    const { code, details } = data.errors;
    return {
      type: actionNames.loadFiltersFail,
      error: {
        code: status,
        type: code,
        errors: details.errors
      }
    };
  };

  searchProducts = searchResponse => {
    const { status, data } = searchResponse;

    if (!isError(status)) {
      return {
        type: actionNames.loadProductsByFilterSuccesful,
        products: data.items,
        totalPages: data.pageCount
      };
    }

    const { code, details } = data.errors;
    return {
      type: actionNames.loadProductsByFilterFail,
      error: {
        code: status,
        type: code,
        errors: details.errors
      }
    };
  };

  seeDetails = seeDetailsResponse => {
    const { status, data } = seeDetailsResponse;

    if (!isError(status)) {
      console.log(data);
      return {
        type: actionNames.loadProductsWithDetailsSuccesful,
        productWithDetails: data.data
      };
    }

    const { code, details } = data.errors;
    return {
      type: actionNames.loadProductWithDetailsFail,
      error: {
        code: status,
        type: code,
        errors: details.errors
      }
    };
  };
}

export default new SearchAdapter();
