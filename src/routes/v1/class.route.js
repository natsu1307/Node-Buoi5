const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const classValidation = require('../../validations/class.validation');
const classController = require('../../controllers/class.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(classValidation.createUser), classController.createUser)
  .get(validate(classValidation.getUsers), classController.getUsers);

router
  .route('/:userId')
  .get(validate(classValidation.getUser), classController.getUser)
  .patch(validate(classValidation.updateUser), classController.updateUser)
  .delete(validate(classValidation.deleteUser), classController.deleteUser);

module.exports = router;