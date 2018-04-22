const db = require('../config/connection');

module.exports = {
  // Users Models
    // Update One User
  updateUser(user) {
    return db.one(`
         UPDATE users
            SET name = $/name/, username = $/username/, email = $/email/,
                password = $/password/, avatar_url = $/avatar_url/
          WHERE id = $/id/
      RETURNING *
    `, user);
    console.log('reached models')
  },
    // Delete One User
  deleteUser(user) {
    return db.none(`
      DELETE FROM users
            WHERE id = $1
    `, user)
  },

  // Blog Entries Models
    // Create New Entry
  createNewEntry(entry, res) {
    return db.one(`
      INSERT INTO blog_entries
                  (date_created, location, title, content, image_url, user_id)
           VALUES ($/date_created/, $/location/, $/title/, $/content/, $/image_url/, $/user_id/)
        RETURNING *
    `, entry);
  },

    // Find Entry By Id
  findByEntryId(entry) {
    return db.one(`
      SELECT *
        FROM blog_entries
       WHERE id = $1
    `, entry);
  },

    // Find All Blog Entries From One User
  findUserEntries (user) {
    return db.many(`
      SELECT *
      FROM blog_entries
      WHERE user_id = $1
    `, user)
  },

    // Find All Blog Entries
  findAllEntries() {
    return db.many(`
      SELECT *
        FROM blog_entries;
    `);
    console.log('reached models')
  },

    // Update One Blog Entry
  updateEntry(entry) {
    return db.one(`
         UPDATE blog_entries
            SET location = $/location/,
                title = $/title/, content = $/content/,
                image_url = $/image_url/
          WHERE id = $/id/
      RETURNING *
    `, entry);
    console.log('reached models')
  },

    // Delete One Blog Entry
  deleteEntry(entry) {
    return db.none(`
      DELETE FROM blog_entries
            WHERE id = $1
    `, entry)
  }

}
