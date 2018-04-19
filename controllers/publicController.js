const publicDB = require('../models/publicModel');

const publicController = {

  getDirectory(req, res, next) {
    publicDB.findAllUsers()
    .then((data) => {
      console.log('Reached the controller');
      // res.locals.users = data;
      res.send(data)
      next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
  },

}

module.exports = publicController;
