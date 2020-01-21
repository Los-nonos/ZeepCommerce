import Joi from '@hapi/joi';

const NameSchema = Joi.object().keys({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),
});

export default NameSchema;
