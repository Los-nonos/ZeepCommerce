import Joi from '@hapi/joi';

export const StoreProductSchema = Joi.object().keys({
  name: Joi.string()
    .min(2)
    .max(50)
    .required(),
  description: Joi.string()
    .min(15)
    .max(255)
    .required(),
  price: Joi.number()
    .min(1)
    .required(),
});

export const EditProductSchema = Joi.object().keys({
  id: Joi.number().min(0),
  name: Joi.string()
    .min(2)
    .max(50)
    .required(),
  description: Joi.string()
    .min(15)
    .max(255)
    .required(),
  price: Joi.number()
    .min(1)
    .required(),
});

export const ShowProductSchema = Joi.object().keys({
  id: Joi.number().min(0),
  name: Joi.string().allow(''),
  description: Joi.string().allow(''),
  price: Joi.number().min(0),
});

export const DeleteProductSchema = Joi.object().keys({
  id: Joi.number()
    .min(0)
    .required(),
});
