import { actionNames } from '../utils/constants/actionConstants';

export function nextPage() {
  return {
    type: actionNames.nextSearchPage,
  };
}


export function selectPage(index) {
  return {
    type: actionNames.selectSearchPage,
    index
  };
}


export function previousPage() {
  return {
    type: actionNames.previousSearchPage,
  };
}


export function seeDetails(uuid) {
  return {
    type: actionNames.seeDetails,
    uuid
  };
}

export function filterProducts(filters, page, orderBy, order) {
  return {
    type: actionNames.search,
    filters,
    page,
    orderBy,
    order
  };
}

export function loadFilters() {
  return {
    type: actionNames.loadFilters,
  };
}