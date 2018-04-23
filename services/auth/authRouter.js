// Ron Addy's Sample Express App Auth
// https://github.com/RonAddy/Sample_Express_App_Auth
const authRouter             = require('express').Router();
const authServices           = require('./authServices');
const publicController       = require('../../controllers/publicController');
const publicViewsController  = require('../../controllers/publicViewsController');
const privateController      = require('../../controllers/privateController')
const privateViewsController = require('../../controllers/privateViewsController')

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};

authRouter.route('/login')
  .post(authServices.login, privateViewsController.handleLogin)

authRouter.route('/register')
  .post(authServices.register, privateViewsController.handleRegisterNewUser)

module.exports = authRouter;
