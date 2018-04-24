// Ron Addy's Sample Express App Auth
// https://github.com/RonAddy/Sample_Express_App_Auth
const bcrypt    = require('bcrypt');
const privateDB = require('../../models/privateModel')
const publicDB  = require('../../models/publicModel')

module.exports = {
  // Login Func
  login(req, res, next) {
    // Declare User
    let user;
    // Declare Login Attempt as object
    // Values pulled from Login form via bodyParser
    const loginAttempt = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }
    // Calls Find By Username function passing in username as parameter
    privateDB.findByUsername(loginAttempt.username)
      .then(userInfo => {
        // Assigns returned user data to user var
        user = userInfo
        // Returns result of bcrypt method to check for password match
        return bcrypt.compareSync(loginAttempt.password, userInfo.password)
      })
      /* Logic for password match / mismatch */
      .then(isValidPass => {
        // If not a match, throw error
        if (!isValidPass) {
          throw {
          message: 'Wrong log-in information'
          }
        }
        // Else assign returned user data to session
        console.log(user)
        req.session.user = user;
        next();
      })
      .catch(err => {
        next(err);
      })
  },

  logout(req, res, next) {
    req.session.destroy(err => next(err));
  },

  // Register new user function
  register(req, res, next) {
    // Declare Salt
    const salt = parseInt(process.env.SALT)
    // Declare Hashing for password pulled from form data via bodyParser
    const hash = bcrypt.hashSync(req.body.password, salt)
    // Declare User's data object, values pulled from form via bodyParser
    const user = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hash,
      avatar_url: req.body.avatar_url,
    }

    // Reappropriated from Ron Addy's Example
    // Call Create New User from Private Controller
    privateDB.createNewUser(user)
      .then(user => {
        if (!user) {
          throw {
            message: 'Incorrect password'
          }
        }
        req.session.user = user;
        next();
      })
      .catch(err => {
        next(err);
      })
  },

  loginRequired: [
    (req, res, next) => next(!req.session.user || null),
    (err, req, res, next) => res.sendStatus(401),
  ],
};
