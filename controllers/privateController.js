const privateDB = require('../models/privateModel');

const privateController = {

// Get All Entries From One User
getUserEntries(req, res, next) {
  privateDB.findUserEntries(req.params.id)
    .then((entries) => {
      console.log('Private: Reached the controller');
      res.locals.entries = entries;
      // res.json(entries);
      next();
    })
    .catch((err) => {
      console.log('I am error: ', err);
      next(err);
    });
  },

postNewEntry(req, res, next) {
  privateDB.createNewEntry(req.body)
    .then(entry => {
      console.log('Private: Reached the controller');
      // res.json(entry)
      res.redirect(`/private/entries/`)
      next();
      })
    .catch((err) => {
      console.log('I am error: ', err);
      next(err);
    });
  },

// Get One Entry From One User
getEntry(req, res, next) {
  privateDB.findByEntryId(req.params.id)
    .then((entry) => {
      console.log('Private: Reached the controller');
      res.locals.entry = entry;
      // res.json(entry);
      // console.log(entry)
      next();
    })
    .catch((err) => {
      console.log('I am error: ', err);
      next(err);
    });
  },

// Get All Entries
getEntries(req, res, next) {
    privateDB.findAllEntries()
    .then((entries) => {
      console.log('Private: Reached the controller');
      res.locals.entries = entries;
      // res.json(entries);
      next();
    })
    .catch((err) => {
      console.log('I am error: ', err);
      next(err);
    });
  },
}

module.exports = privateController;
