const router = require('express').Router();

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};

router.get('/', (req, res) => {
  res.send(`You've reached the router`);
});

module.exports = router;
