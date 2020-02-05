import Joi = require('@hapi/joi');

export const LoginSchema = Joi.object().keys({
  username: Joi.string()
    .min(3)
    .max(100)
    .required(),
  password: Joi.string()
    .min(8)
    .max(20)
    .required(),
});
