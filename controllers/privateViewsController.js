module.exports = {

  showPrivateNewEntry (req, res) {
    let entry = res.locals.entry
    console.log('Private: Showing Make New Entry', res.locals.entry)
    res.render('private/user-private-create-entry')
  },

  showPrivateOneEntry (req, res) {
    let entry = res.locals.entry
    console.log('Private: Showing One Entry', res.locals.entry)
    res.render('private/user-private-single-entry', {entry: entry})
  },

  showPrivateUserProfile (req, res) {
    let entries = res.locals.entries
    console.log('Private: Showing One User Profile', res.locals.entries)
    res.render('private/user-private-profile', {entries: entries})
  },

};
