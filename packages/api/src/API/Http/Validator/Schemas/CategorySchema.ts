import * as Joi from '@hapi/joi';

export const CategoryCreateSchema = Joi.object().keys({
  name: Joi.string()
    .min(2)
    .max(50)
    .required(),

  description: Joi.string()
    .min(15)
    .max(255)
    .required(),
});

export const CategoryEditSchema = Joi.object().keys({
  name: Joi.string()
    .min(2)
    .max(50)
    .required(),

  description: Joi.string()
    .min(15)
    .max(255)
    .required(),
});

export const CategoryDeleteSchema = Joi.object().keys({
  id: Joi.number()
    .min(0)
    .required(),
});

export const CategoryShowSchema = Joi.object().keys({
  name: Joi.string()
    .allow('')
    .required(),

  description: Joi.string().allow(''),
});

export const CategoryShowByIdSchema = Joi.object().keys({
  id: Joi.number()
    .min(0)
    .required(),
});
