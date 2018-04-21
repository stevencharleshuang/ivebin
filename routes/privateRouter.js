const express                = require('express');
const privateRouter          = express.Router();
const privateController      = require('../controllers/privateController');
const privateViewsController = require('../controllers/privateViewsController')

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};


privateRouter.route('/user/:id')
  .get(privateController.getUserEntries, privateViewsController.showPrivateUserProfile)
  // .get(privateController.getUserProfile)

privateRouter.route('/entries/:id/edit')
  .get(privateController.getEntry, privateViewsController.showPrivateEditEntry)

privateRouter.route('/entries/new')
  .get(privateController.getEntries, privateViewsController.showPrivateNewEntry)

privateRouter.route('/entries/:id')
  .get(privateController.getEntry, privateViewsController.showPrivateOneEntry)

privateRouter.route('/entries')
  .get(privateController.getEntries)

privateRouter.get('/', (req, res) => {
  console.log('At private router');
  res.send(`You've reached the private router`);
});




module.exports = privateRouter
