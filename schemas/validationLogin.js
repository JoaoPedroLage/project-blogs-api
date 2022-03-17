const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string()
  .email()
  .required()
  .empty()
  .messages({
    'string.base': '400|"email" must be a string',
    'string.empty': '400|"email" is not allowed to be empty',
    'any.required': '400|"email" is required',
    'string.email': '400|"email" must be a valid email',
  }),
  password: Joi.string()
  .required()
  .min(6)
  .empty()
  .messages({
    'string.base': '400|"password" must be a string',
    'string.empty': '400|"password" is not allowed to be empty',
    'any.required': '400|"password" is required',
    'string.min': '400|"password" length must be at least 6 characters long',
  }),
});