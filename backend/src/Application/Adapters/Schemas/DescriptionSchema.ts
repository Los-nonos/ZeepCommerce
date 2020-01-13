import Joi from '@hapi/joi';

const DescriptionSchema = Joi.object({
    description: Joi.string().min(3).max(100).required()
});

export default DescriptionSchema;