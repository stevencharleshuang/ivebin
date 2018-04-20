const publicDB = require('../models/publicModel');

const publicController = {

  getOneUser(req, res, next) {
    publicDB.findByUserId(req.params.id)
    .then((data) => {
      // res.locals.user = data;
      res.send(data);
      next();
    })
    .catch((err) => {
      console.log('I am error: ', err);
      next(err);
    });
  },

  getDirectory(req, res, next) {
    publicDB.findAllUsers()
    .then((data) => {
      console.log('Reached the controller');
      // res.locals.users = data;
      res.send(data);
      next();
    })
    .catch((err) => {
      console.log('I am error: ', err);
      next(err);
    });
  },

}

module.exports = publicController;
