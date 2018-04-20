const db = require('../config/connection');

module.exports = {

  findByUserId(id) {
    return db.many(`
      SELECT *
        FROM users
       WHERE id = $1
    `, id);
  },

  findAllUsers() {
    return db.many(`
      SELECT *
        FROM users;
    `);
    // console.log('reached models')
  },

};
