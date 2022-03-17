const validationUser = require('../schemas/validationNewUser');
const validationLogin = require('../schemas/validationLogin');
const validationCategory = require('../schemas/validationCategory');
const validationPost = require('../schemas/validationPost');
const validationUpdatedPost = require('../schemas/validationUpdatedPost');

const validateUser = async (req, res, next) => {
  const { error } = validationUser.validate(req.body);
  
    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    return next();
};

const validateLogin = async (req, res, next) => {
  const { error } = validationLogin.validate(req.body);
  
    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    return next();
};

const validateCategory = async (req, res, next) => {
  const { error } = validationCategory.validate(req.body);
  
    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    return next();
};

const validatePost = async (req, res, next) => {
  const { error } = validationPost.validate(req.body);
  
    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    return next();
};

const validateUpdatedPost = async (req, res, next) => {
  const { error } = validationUpdatedPost.validate(req.body);
  
    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    return next();
};

module.exports = {
  validateUser,
  validateLogin,
  validateCategory,
  validatePost,
  validateUpdatedPost,
};