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

  createNewUser(student) {
    return db.many(`
      INSERT INTO users
                  (name, username, email, password, avatar_url)
           VALUES ($/name/, $/username/, $/email/, $/password/, $/avatar_url/)
        RETURNING *
    `, user);
  },
};
