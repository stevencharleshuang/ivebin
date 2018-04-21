const privateDB = require('../models/privateModel');

const privateController = {

getEntries(req, res, next) {
    privateDB.findAllEntries()
    .then((entries) => {
      console.log('Reached the controller');
      // res.locals.entries = entries;
      res.json(entries);
      next();
    })
    .catch((err) => {
      console.log('I am error: ', err);
      next(err);
    });
  },
}

module.exports = privateController;
