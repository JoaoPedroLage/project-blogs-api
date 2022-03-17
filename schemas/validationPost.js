const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string()
  .required()
  .messages({
    'string.base': '400|"title" must be a string',
    'any.required': '400|"title" is required',
  }),
  content: Joi.string()
  .required()
  .messages({
    'string.base': '400|"content" must be a string',
    'any.required': '400|"content" is required',
  }),
  categoryIds: Joi.array()
  .required()
  .messages({
    'any.required': '400|"categoryIds" is required',
  }),
});