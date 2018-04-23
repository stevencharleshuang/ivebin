const express                = require('express');
const privateRouter          = express.Router();
const privateController      = require('../controllers/privateController');
const privateViewsController = require('../controllers/privateViewsController')
const publicController       = require('../controllers/publicController');

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};

privateRouter.route('/users/:id/edit')
  .get(publicController.getOneUser, privateViewsController.showEditUserForm)

privateRouter.route('/users/:id')
  .get(privateController.getUserEntries, publicController.getDirectory, privateViewsController.showPrivateUserProfile)
  .put(privateController.editUserInfo)
  .post(privateController.postNewEntry)
  .delete(privateController.removeUser)

  // .get(privateController.getUserProfile)

privateRouter.route('/entries/:id/edit')
  .get(privateController.getEntry, privateViewsController.showPrivateEditEntry)

privateRouter.route('/users/:id/new')
  .get(privateController.getUserEntries, privateViewsController.showPrivateNewEntry)

privateRouter.route('/entries/:id')
  .get(privateController.getEntry, privateViewsController.showPrivateOneEntry)
  .put(privateController.editEntry)
  .delete(privateController.removeEntry)

privateRouter.route('/entries')
  .get(privateController.getEntries)

privateRouter.get('/', (req, res) => {
  console.log('At private router');
  res.send(`You've reached the private router`);
});

module.exports = privateRouter
