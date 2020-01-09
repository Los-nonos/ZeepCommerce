import Joi from '@hapi/joi';

const DniSchema = Joi.object({
    dni: Joi.number().positive().min(1000000).max(99999999).precision(0).required()
});

export default DniSchema;