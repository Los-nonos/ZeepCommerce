import Joi from '@hapi/joi';

export const UserCreateSchema = Joi.object()
  .keys({
    name: Joi.string()
      .min(2)
      .max(30)
      .required(),
    lastname: Joi.string()
      .min(2)
      .max(30)
      .required(),
    age: Joi.number()
      .min(1)
      .max(110),
    dni: Joi.number()
      .min(1000000)
      .max(70000000),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
    birthyear: Joi.number()
      .min(1900)
      .max(2150),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
      .required(),
    confirmation: Joi.ref('password'),
    phonenumber: Joi.number()
      .min(6)
      .max(12),
    cellphonenumber: Joi.number()
      .min(8)
      .max(15),
    phoneareacode: Joi.number()
      .min(2)
      .max(8),
    city: Joi.string()
      .min(4)
      .max(20),
    state: Joi.string()
      .min(4)
      .max(30),
    country: Joi.string()
      .min(3)
      .max(20),
  })
  .with('password', 'confirmation');

export const UserEditSchema = Joi.object()
  .keys({
    id: Joi.number()
      .min(0)
      .required(),
    name: Joi.string()
      .min(2)
      .max(30)
      .required(),
    lastname: Joi.string()
      .min(2)
      .max(30)
      .required(),
    age: Joi.number()
      .min(1)
      .max(110)
      .required(),
    dni: Joi.number()
      .min(1000000)
      .max(70000000)
      .required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
    birthyear: Joi.number()
      .min(1900)
      .max(2150)
      .required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
      .required(),
    confirmation: Joi.ref('password'),
    phonenumber: Joi.number()
      .min(6)
      .max(12)
      .required(),
    cellphonenumber: Joi.number()
      .min(8)
      .max(15)
      .required(),
    phoneareacode: Joi.number()
      .min(2)
      .max(8)
      .required(),
    city: Joi.string()
      .min(4)
      .max(20)
      .required(),
    state: Joi.string()
      .min(4)
      .max(30)
      .required(),
    country: Joi.string()
      .min(3)
      .max(20)
      .required(),
  })
  .with('password', 'confirmation');

export const UserDeleteSchema = Joi.object().keys({
  id: Joi.number()
    .min(0)
    .required(),
});

export const FindUserSchema = Joi.object().keys({
  id: Joi.number()
    .min(0)
    .required(),
});
