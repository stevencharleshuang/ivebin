module.exports = {

  // Render Edit One Blog Entry - Private View
  showPrivateEditEntry (req, res) {
    let entry = res.locals.entry
    console.log('Private: Showing Edit One Entry', res.locals.entry)
    res.render('private/user-private-edit-entry', {entry: entry})
  },

  // Render Make New Blog Entry - Private View
  showPrivateNewEntry (req, res) {
    let entry = res.locals.entry
    console.log('Private: Showing Make New Entry', res.locals.entry)
    res.render('private/user-private-create-entry', {entry: entry})
  },

  // Render One Blog Entry - Private View
  showPrivateOneEntry (req, res) {
    let entry = res.locals.entry
    console.log('Private: Showing One Entry', res.locals.entry)
    res.render('private/user-private-single-entry', {entry: entry})
  },

  // Render One User Profile - Private View
  showPrivateUserProfile (req, res) {
    let entries = res.locals.entries
    console.log('Private: Showing One User Profile', res.locals.entries)
    res.render('private/user-private-profile', {entries: entries})
  },

};
