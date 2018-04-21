const express           = require('express');
const privateRouter     = express.Router();
const privateController = require('../controllers/privateController');

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};


privateRouter.route('/user/:id')
  .get(privateController.getUserEntries)
  // .get(privateController.getUserProfile)

privateRouter.route('/entries')
  .get(privateController.getEntries)

privateRouter.get('/', (req, res) => {
  console.log('At private router');
  res.send(`You've reached the private router`);
});




module.exports = privateRouter
