const db = require('../config/connection');

module.exports = {

  // Find All Blog Entries
  findAllEntries() {
    return db.many(`
      SELECT *
        FROM blog_entries;
    `);
    console.log('reached models')
  },

}
