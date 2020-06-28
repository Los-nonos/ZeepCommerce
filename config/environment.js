import dotenv from 'dotenv';

export const env = (value, defaultValue = null) => {
  dotenv.config();
  const result = process.env[value];
  return result ? result : defaultValue;
}