import Joi from '@hapi/joi';

const PriceSchema = Joi.Objetc({
    price: Joi.number().min(0).float().required()
})

export default PriceSchema;