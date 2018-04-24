const express                = require('express');
const privateRouter          = express.Router();
const privateController      = require('../controllers/privateController');
const privateViewsController = require('../controllers/privateViewsController')
const publicController       = require('../controllers/publicController');
const AuthService            = require('../services/auth/authServices')

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};

privateRouter.route('/users/:id/edit')
  .get(AuthService.loginRequired, publicController.getOneUser, privateViewsController.showEditUserForm)

// One User Private Profile
privateRouter.route('/users/:id')
  .get(AuthService.loginRequired, privateController.getUserEntries,
    publicController.getDirectory, privateViewsController.showPrivateUserProfile)
  .put(AuthService.loginRequired, privateController.editUserInfo)
  .post(AuthService.loginRequired, privateController.postNewEntry)
  .delete(AuthService.loginRequired, privateController.removeUser)

  // .get(privateController.getUserProfile)

// Get Edit One Entry View
privateRouter.route('/entries/:id/edit')
  .get(AuthService.loginRequired, privateController.getEntry, privateViewsController.showPrivateEditEntry)

// Get Create New Entry View
privateRouter.route('/users/:id/new')
  .get(AuthService.loginRequired, privateController.getUserEntries, privateViewsController.showPrivateNewEntry)

// Get One Entry, Edit Entry, Delete Entry
privateRouter.route('/entries/:id')
  .get(AuthService.loginRequired, privateController.getEntry, privateViewsController.showPrivateOneEntry)
  .put(AuthService.loginRequired, privateController.editEntry)
  .delete(AuthService.loginRequired, privateController.removeEntry)

// Get Entries (testing)
privateRouter.route('/entries')
  .get(privateController.getEntries)

privateRouter.get('/', (req, res) => {
  console.log('At private router');
  res.send(`You've reached the private router`);
});

module.exports = privateRouter
