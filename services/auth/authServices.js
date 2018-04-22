// Ron Addy's Sample Express App Auth
// https://github.com/RonAddy/Sample_Express_App_Auth
const bcrypt = require('bcrypt');
const privateDB = require('../../models/privateModel')
const publicDB = require('../../models/publicModel')

module.exports = {

  login(req, res, next) {
    let user;
    const loginAttempt = {
      uname: req.body.uname,
      email: req.body.email,
      password: req.body.password
    }
    publicDB.findUser(loginAttempt.uname)
      .then(userInfo => {
        user = userInfo
        return bcrypt.compareSync(loginAttempt.password, userInfo.password_digest)
      })
      .then(isValidPass => {
        if (!isValidPass) {
          throw {
          message: 'Wrong log-in information'
          }
        }
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

  register(req, res, next) {
    const salt = parseInt(process.env.SALT)
    const hash = bcrypt.hashSync(req.body.password, salt)
    const user = {
      uname: req.body.uname,
      email: req.body.email,
      password_digest: hash
    }

    privateDB.createUser(user)
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

  loginRequire: [
    (req, res, next) => next(!req.session.user || null),
    (err, req, res, next) => res.sendStatus(401),
  ]
};
