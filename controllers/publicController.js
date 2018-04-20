const publicDB = require('../models/publicModel');

const publicController = {

  getOneUser(req, res, next) {
    publicDB.findByUserId(req.params.id)
    .then((user) => {
      res.locals.user = user;
      // res.send(user);
      next();
    })
    .catch((err) => {
      console.log('I am error: ', err);
      next(err);
    });
  },

  getDirectory(req, res, next) {
    publicDB.findAllUsers()
    .then((users) => {
      console.log('Reached the controller');
      res.locals.users = users;
      // res.json(users);
      next();
    })
    .catch((err) => {
      console.log('I am error: ', err);
      next(err);
    });
  },

  registerNewUser(req, res, next){
    publicDB.createNewUser(req.body)
      .then(user => {
        // res.json(user)
        res.redirect(`/public/users/`)
        next();
      })
      .catch((err) => {
        console.log('I am error: ', err);
        next(err);
    });
  },

  editUserInfo(req, res, next){
    publicDB.updateUser(req.body)
      .then(user => {
        // res.json(user)
        res.redirect(`/public/users/`)
        next();
      })
      .catch((err) => {
        console.log('I am error: ', err);
        next(err);
    });
  },
}

module.exports = publicController;
