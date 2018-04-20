const publicDB = require('../models/publicModel');

const publicController = {

  // Get One User - Public
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

  // Get All Users - Public
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

  // Create New User - Public
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

  // Edit User Info
  editUserInfo(req, res, next){
    req.body.id = req.params.id
    publicDB.updateUser(req.body)
      .then(user => {
        // console.log(req.body, 'update controller');
        res.locals.user = user
        res.redirect(`/public/users/${user.id}`)
      })
      .catch((err) => {
        console.log('I am error: ', err);
        next(err);
    });
  },

  removeUser(req, res, next) {
    publicDB.deleteUser(req.params.id)
      .then(() => {
        res.redirect('/public/users');
      })
      .catch((err) => {
        console.log('I am error: ', err);
        next(err);
    });
  },
}

module.exports = publicController;
