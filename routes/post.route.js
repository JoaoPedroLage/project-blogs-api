const express = require('express');

const postControllers = require('../controllers/postController');
const validationMiddleware = require('../middlewares/validation.middleware');
const authorization = require('../middlewares/auth.middleware');

const router = express.Router();

router.post(
  '/',
  authorization,
  validationMiddleware.validatePost,
  postControllers.create,
);

router.get(
  '/',
  authorization,
  postControllers.findAll,
);

router.get(
  '/:id',
  authorization,
  postControllers.findByPk,
);

router.put(
  '/:id',
  authorization,
  validationMiddleware.validateUpdatedPost,
  postControllers.update,
);

module.exports = router;