import Joi from '@hapi/joi';

const PriceSchema = Joi.object().keys({
  price: Joi.number()
    .positive()
    .min(0)
    .max(99999999)
    .precision(0)
    .required(),
});

export default PriceSchema;
