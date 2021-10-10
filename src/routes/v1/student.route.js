const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const studentValidation = require('../../validations/student.validation');
const studentController = require('../../controllers/student.controller');

const router = express.Router();

router
.route('/')
.post(validate(studentValidation.createUser), studentController.createUser)
.get(validate(studentValidation.getUsers), studentController.getUsers);

router
.route('/:userId')
.get(validate(studentValidation.getUser), studentController.getUser)
.patch(validate(studentValidation.updateUser), studentController.updateUser)
.delete(validate(studentValidation.deleteUser), studentController.deleteUser);

module.exports = router;