const db = require('../config/connection');

module.exports = {

  // Find One User By ID
  findByUserId(id) {
    return db.many(`
      SELECT *
        FROM users
       WHERE id = $1
    `, id);
  },

  // Find All Users
  findAllUsers() {
    return db.many(`
      SELECT *
        FROM users;
    `);
    // console.log('reached models')
  },

  // Create One User
  createNewUser(user) {
    return db.one(`
      INSERT INTO users
                  (name, username, email, password, avatar_url)
           VALUES ($/name/, $/username/, $/email/, $/password/, $/avatar_url/)
        RETURNING *
    `, user);
  },

  // // Update One User
  // updateUser(user) {
  //   return db.one(`
  //        UPDATE users
  //           SET name = $/name/, username = $/username/, email = $/email/,
  //               password = $/password/, avatar_url = $/avatar_url/
  //         WHERE id = $/id/
  //     RETURNING *
  //   `, user);
  //   console.log('reached models')
  // },

  // // Delete One User
  // deleteUser(user) {
  //   return db.none(`
  //     DELETE FROM users
  //           WHERE id = $1
  //   `, user)
  // },
};
