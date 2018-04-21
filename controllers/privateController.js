const privateDB = require('../models/privateModel');

const privateController = {

getEntry(req, res, next) {
  privateDB.findByEntryId(req.params.id)
    .then((entry) => {
      // res.locals.entry = entry;
      res.json(entry);
      next();
    })
    .catch((err) => {
      console.log('I am error: ', err);
      next(err);
    });
  },

getUserEntries(req, res, next) {
  privateDB.findUserEntries(req.params.id)
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
