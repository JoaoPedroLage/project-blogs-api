const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string()
  .required()
  .messages({
    'string.base': '400|"name" must be a string',
    'any.required': '400|"name" is required',
  }),
});