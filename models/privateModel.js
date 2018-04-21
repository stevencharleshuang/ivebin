const db = require('../config/connection');

module.exports = {

  // Create New Entry
  createNewEntry(entry) {

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

}
