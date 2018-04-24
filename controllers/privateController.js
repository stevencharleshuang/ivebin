const privateDB = require('../models/privateModel');

const privateController = {

  // Edit User Info - Move to Private
  editUserInfo(req, res, next){
    req.body.id = req.params.id
    privateDB.updateUser(req.body)
      .then(user => {
        // console.log(req.body, 'update controller');
        res.locals.user = user
        res.redirect(`/private/users/${user.id}`)
      })
      .catch((err) => {
        console.log('I am error: ', err);
        next(err);
    });
  },

    // Delete User Account - Move to Private
  removeUser(req, res, next) {
    privateDB.deleteUser(req.params.id)
      .then(() => {
        res.redirect('/public/users');
      })
      .catch((err) => {
        console.log('I am error: ', err);
        next(err);
    });
  },

// Get User info
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

getUserDetails(req, res, next) {
  privateDB.findUserDetails(req.params.id)
    .then((user) => {
      console.log('Private: Reached the controller');
      res.locals.user = user;
      // res.json(entries);
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

// Post New Blog Entry
postNewEntry(req, res, next) {
  // console.log('these are', req.params )
  privateDB.createNewEntry(req.body)
    .then(entry => {
      console.log('Private: Reached the controller');
      // console.log('Private Controller POST:', res.locals)
      // res.json(entry)
      res.redirect(`/private/users/${req.params.id}`)
      next();
      })
    .catch((err) => {
      console.log('I am error: ', err);
      next(err);
    });
  },

// Edit Blog Entry - Private
editEntry(req, res, next){
  req.body.id = req.params.id
  privateDB.updateEntry(req.body)
    .then(entry => {
      // console.log(req.body, 'update controller');
      res.locals.entry = entry
      res.redirect(`/private/entries/${req.params.id}`)
    })
    .catch((err) => {
      console.log('I am error: ', err);
      next(err);
    });
  },

// Delete Blog Entry - Private
removeEntry(req, res, next) {
  let user = req.session.user
  console.log('reqparams', user)
  privateDB.deleteEntry(req.params.id)
    .then(() => {
      console.log('Private: Reached the controller');
      res.redirect(`/private/users/${user.id}`);
    })
    .catch((err) => {
      console.log('I am error: ', err);
      next(err);
    });
  },
}

module.exports = privateController;
