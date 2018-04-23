const bcrypt = require('bcrypt');
const db = require('../config/connection');

module.exports = {
  // Find One Blog By User ID
  findEntryByUserId(id) {
    return db.one(`
      SELECT  *, blog_entries.id as entry_id
      FROM users
      JOIN blog_entries
          ON users.id = blog_entries.user_id
       WHERE blog_entries.id = $1
    `, id);
  },

  // Find One User By ID
  findByUserId(id) {
    return db.many(`
      SELECT *, blog_entries.id as entry_id
        FROM users
        JOIN blog_entries
          ON users.id = blog_entries.user_id
       WHERE users.id = $1
    `, id);
  },

  // Find One User By Username
  findByUsername(username) {
    return db.one(`
      SELECT *
        FROM users
       WHERE username = $1
    `, username)
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
