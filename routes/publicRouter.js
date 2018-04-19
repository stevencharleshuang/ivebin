const express          = require('express');
const publicRouter     = express.Router();
const publicController = require('../controllers/publicController');

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};

publicRouter.get('/', (req, res) => {
  console.log('At public router');
  res.json(`You've reached the public router`);
});

publicRouter.route('/directory')
  .get(publicController.getDirectory)


module.exports = publicRouter;
