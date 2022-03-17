const Joi = require('joi');

module.exports = Joi.object({
  displayName: Joi.string()
  .required()
  .min(8)
  .messages({
    'string.base': '400|"displayName" must be a string',
    'any.required': '400|"displayName" is required',
    'string.min': '400|"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string()
  .email()
  .required()
  .messages({
    'string.base': '400|"email" must be a string',
    'any.required': '400|"email" is required',
    'string.email': '400|"email" must be a valid email',
  }),
  password: Joi.string()
  .required()
  .min(6)
  .messages({
    'string.base': '400|"password" must be a string',
    'any.required': '400|"password" is required',
    'string.min': '400|"password" length must be 6 characters long',
  }),
  image: Joi.string()
  .messages({
    'string.base': '400|"image" must be a string',
  }),
});