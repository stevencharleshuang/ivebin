module.exports = {

  showPrivateOneEntry (req, res) {
    let entry = res.locals.entry
    console.log(res.locals.entry)
    res.render('private/user-private-single-entry', {entry: entry})
  },

  showPrivateUserProfile (req, res) {
    let entries = res.locals.entries
    console.log(res.locals.entries)
    res.render('private/user-private-profile', {entries: entries})
  },

};
