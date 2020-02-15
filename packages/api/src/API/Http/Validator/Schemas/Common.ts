import * as Joi from '@hapi/joi';

export const IdSchema = Joi.object().keys({
  id: Joi.number()
    .integer()
    .min(0)
    .required(),
});
