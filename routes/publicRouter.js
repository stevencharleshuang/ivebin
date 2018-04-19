const publicRouter = require('express').Router();

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};

publicRouter.get('/', (req, res) => {
  console.log('At public router');
  res.send(`You've reached the public router`);
});

module.exports = publicRouter;
