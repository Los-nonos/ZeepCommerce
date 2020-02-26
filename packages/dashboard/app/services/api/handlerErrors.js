import { page, redirectTo } from '../../utils/helpers/redirectTo';

export const handler = error => {
  // eslint-disable-next-line default-case
  switch (error.status) {
    case 401:
      redirectTo(page.login);
      break;
    // TODO: implement view when is ready
    case 403:
      console.warn('implement view please');
      break;
  }
};
