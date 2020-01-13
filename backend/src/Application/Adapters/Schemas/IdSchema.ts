import Joi from '@hapi/joi';

const IdSchema = Joi.object().keys({
    id: Joi.number().min(0).required()
});

export default IdSchema;