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

privateRouter.route('/entries/:id')
  .get(privateController.getEntry)

privateRouter.route('/entries')
  .get(privateController.getEntries)

privateRouter.get('/', (req, res) => {
  console.log('At private router');
  res.send(`You've reached the private router`);
});




module.exports = privateRouter
