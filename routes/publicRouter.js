const express               = require('express');
const publicRouter          = express.Router();
const publicController      = require('../controllers/publicController');
const publicViewsController = require('../controllers/publicViewsController');

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};

publicRouter.route('/users/:id/edit')
  .get(publicController.getOneUser, publicViewsController.showEditForm)

publicRouter.route('/users/:id')
  .get(publicController.getOneUser, publicController.getDirectory, publicViewsController.showUserProfile)
  .put(publicController.editUserInfo)
  .delete(publicController.removeUser)

publicRouter.route('/users')
  .get(publicController.getDirectory, publicViewsController.showAllUsers)
  .post(publicController.registerNewUser)

publicRouter.route('/')
  .get(publicViewsController.showHomepage)

// publicRouter.get('/', (req, res) => {
  // console.log('At public router');
  // res.json(`You've reached the public router`);
// });

module.exports = publicRouter;
