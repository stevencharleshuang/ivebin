const privateRouter = require('express').Router();

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};

privateRouter.get('/', (req, res) => {
  console.log('At private router');
  res.send(`You've reached the private router`);
});

module.exports = privateRouter
