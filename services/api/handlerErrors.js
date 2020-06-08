import { pages, redirectTo } from '../../utils/helpers/redirectTo';

export const handler = error => {
  // eslint-disable-next-line default-case
  switch (error.status) {
    case 401:
      redirectTo(pages.login);
      break;
    // TODO: implement error view when is ready
    case 403:
      break;
  }
};
