const express = require('express');

const categoryControllers = require('../controllers/categoryController');
const validationMiddleware = require('../middlewares/validation.middleware');
const authorization = require('../middlewares/auth.middleware');

const router = express.Router();

router.post(
  '/',
  authorization,
  validationMiddleware.validateCategory,
  categoryControllers.create,
);

router.get(
  '/',
  authorization,
  categoryControllers.findAll,
);

module.exports = router;