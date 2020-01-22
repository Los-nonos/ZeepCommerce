import Joi from '@hapi/joi';

const NameSchema = Joi.object().keys({
    name: Joi.string().min(2).max(30).required()
});

export default NameSchema;