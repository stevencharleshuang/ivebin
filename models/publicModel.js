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

  createNewUser(user) {
    return db.one(`
      INSERT INTO users
                  (name, username, email, password, avatar_url)
           VALUES ($/name/, $/username/, $/email/, $/password/, $/avatar_url/)
        RETURNING *
    `, user);
  },

  updateUser(user) {
    return db.one(`
         UPDATE users
            SET name = $/name/, username = $/username/, email = $/email/,
                password = $/password/, avatar_url = $/avatar_url/
          WHERE id = $/id/
      RETURNING *
    `, user);
  },
};
