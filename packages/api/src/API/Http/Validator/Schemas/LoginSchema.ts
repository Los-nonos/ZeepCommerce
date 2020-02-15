import * as Joi from '@hapi/joi';

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

export const RenewTokenSchema = Joi.object().keys({
  token: Joi.string()
    .min(3)
    .max(500)
    .required(),
});

export const ChangePasswordSchema = Joi.object().keys({
  username: Joi.string()
    .min(3)
    .max(100)
    .required(),
  password: Joi.string()
    .min(8)
    .max(20)
    .required(),
});
