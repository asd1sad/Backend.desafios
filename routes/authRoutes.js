const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.loginPage)
  .post(authController.login)
  .patch(authController.logout);

module.exports = router;
