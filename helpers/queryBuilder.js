import { env } from '../config/environment';

export const getQueryHash = () => {
  // @ts-ignore
  if (!env('BASIC_AUTH_KEY')) {
    return Date.now().toString();
  }
  return env('BASIC_AUTH_KEY', 'asfasfawfasfaw').slice(0, 8);
};
