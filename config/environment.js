export const env = (value, defaultValue = null) => {
  const result = process.env[value];
  return result ? result : defaultValue;
};
