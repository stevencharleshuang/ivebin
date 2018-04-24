// Ron Addy's Sample Express App Auth
// https://github.com/RonAddy/Sample_Express_App_Auth
// Jason Seminara's 'js-node-sessions-lesson'
// https://git.generalassemb.ly/wdi-nyc-rover/js-node-sessions-lesson

const authRouter             = require('express').Router();
const AuthServices           = require('./authServices');
const publicController       = require('../../controllers/publicController');
const publicViewsController  = require('../../controllers/publicViewsController');
const privateController      = require('../../controllers/privateController')
const privateViewsController = require('../../controllers/privateViewsController')

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};

authRouter.route('/login')
  .post(AuthServices.login, privateViewsController.handleLogin)

authRouter.route('/logout')
  .get(AuthServices.logout, privateViewsController.handleLogout)

authRouter.route('/register')
  .post(AuthServices.register, privateViewsController.handleRegisterNewUser)

module.exports = authRouter;
