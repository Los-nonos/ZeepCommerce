import * as Joi from '@hapi/joi';
export const CreateUserRoleSchema = Joi.object().keys({
  name: Joi.string()
    .min(5)
    .max(100)
    .required(),
});
export const EditUserRoleSchema = Joi.object().keys({
  name: Joi.string()
    .min(5)
    .max(100)
    .required(),
});
export const FindByIdUserRoleSchema = Joi.object().keys({
  id: Joi.number()
    .min(0)
    .required(),
});
export const FindUserRoleSchema = Joi.object().keys({
  name: Joi.string()
    .min(5)
    .max(100)
    .allow(null),
});
export const DeleteUserRoleSchema = Joi.object().keys({
  id: Joi.number()
    .min(0)
    .required(),
});
