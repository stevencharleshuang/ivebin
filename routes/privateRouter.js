const express           = require('express');
const privateRouter     = express.Router();
const privateController = require('../controllers/privateController');

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};

privateRouter.get('/', (req, res) => {
  console.log('At private router');
  res.send(`You've reached the private router`);
});

privateRouter.route('/entries')
  .get(privateController.getEntries)


// privateRouter.route('/user/:id')
//   .get(privateController.getUserProfile)

module.exports = privateRouter
