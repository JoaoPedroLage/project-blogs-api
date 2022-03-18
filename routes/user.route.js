const express = require('express');

const userControllers = require('../controllers/userController');
const validationMiddleware = require('../middlewares/validation.middleware');
const authorization = require('../middlewares/auth.middleware');

const router = express.Router();

router.post(
  '/',
  validationMiddleware.validateUser,
  userControllers.create,
);

router.get(
  '/',
  authorization,
  userControllers.findAll,
);

router.get(
  '/:id',
  authorization,
  userControllers.findByPk,
);

module.exports = router;