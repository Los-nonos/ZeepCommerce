import Joi from '@hapi/joi';

export const CreateCategorySchema = Joi.object().keys({

    name: Joi.string()
    .min(2)
    .max(50)
    .required(),

    description: Joi.string()
    .min(15)
    .max(255)
    .required()
});

export const EditCategorySchema = Joi.object().keys({

    id: Joi.number()
    .min(0)
    .required(),

    name: Joi.string()
    .min(2)
    .max(50)
    .required(),

    description: Joi.string()
    .min(15)
    .max(255)
    .required()
});

export const DeleteCategorySchema = Joi.object().keys({

    id: Joi.number()
    .min(0)
    .required()
});

export const ShowCategorySchema = Joi.object().keys({

    id: Joi.number()
    .min(0),

    name: Joi.string()
    .allow(''),

    description: Joi.string()
    .allow('')
});