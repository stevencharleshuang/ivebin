const express               = require('express');
const publicRouter          = express.Router();
const publicController      = require('../controllers/publicController');
const publicViewsController = require('../controllers/publicViewsController');

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};

// Public profile single entry
publicRouter.route('/users/:id/entries/:id')
  .get(publicController.getOnePublicEntry, publicViewsController.showOnePublicEntry)

// Public profile many entries
// publicRouter.route('/users/:id/entries')
  // .get(publicController.getManyPublicEntries, publicViewsController.showManyPublicEntries)

publicRouter.route('/users/:id')
  .get(publicController.getOneUser, publicController.getDirectory, publicViewsController.showUserProfile)

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
