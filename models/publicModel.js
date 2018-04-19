const db = require('../config/connection');

module.exports = {

  findAllUsers() {
    return db.many(`
      SELECT *
        FROM users;
    `);
    // console.log('reached models')
  },

};
