const express = require('express');

const loginControllers = require('../controllers/loginController');
const validationMiddleware = require('../middlewares/validation.middleware');

const router = express.Router();

router.post(
  '/',
  validationMiddleware.validateLogin,
  loginControllers.create,
);

module.exports = router;