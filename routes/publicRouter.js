const express               = require('express');
const publicRouter          = express.Router();
const publicController      = require('../controllers/publicController');
const publicViewsController = require('../controllers/publicViewsController');

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};


publicRouter.route('/users/:id')
  .get(publicController.getOneUser)
  .post(publicController.registerNewUser, publicViewsController.showUserProfile)

publicRouter.route('/users/directory')
  .get(publicController.getDirectory)

publicRouter.route('/')
  .get(publicViewsController.showHomepage)

// publicRouter.get('/', (req, res) => {
  // console.log('At public router');
  // res.json(`You've reached the public router`);
// });

module.exports = publicRouter;
