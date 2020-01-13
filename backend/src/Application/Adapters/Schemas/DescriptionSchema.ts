import Joi from '@hapi/joi';

const DescriptionSchema = Joi.object().keys({
    desciption: Joi.string().min(0).max(4000).required()
})

export default DescriptionSchema;