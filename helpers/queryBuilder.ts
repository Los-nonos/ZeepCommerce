export const getQueryHash = (): string => {
  // @ts-ignore
  if (!process.env.BASIC_AUTH_KEY) {
    return Date.now().toString();
  }
  return process.env.BASIC_AUTH_KEY.slice(0, 8);
};
