const secret = (): string => {
  return process.env.JWT_CONFIG_SECRET;
};

const expirationTime = (): string => {
  return process.env.JWT_CONFIG_EXPIRATION_TIME;
};

const jwtConfiguration = (): { jwtSecret: string; expirationTime: string } => {
  return {
    jwtSecret: secret(),
    expirationTime: expirationTime(),
  };
};

export default { jwtConfiguration };
