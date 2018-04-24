module.exports = {

  // Render Edit One Blog Entry - Private View
  showPrivateEditEntry (req, res) {
    let user = req.session.user;
    let entry = res.locals.entry;
    // console.log('Private: Showing Edit One Entry', res.locals.entry)
    res.render('private/user-private-edit-entry', {user: user, entry: entry})
  },

  // Render Make New Blog Entry - Private View
  showPrivateNewEntry (req, res) {
    let user = req.session.user;
    let entries = res.locals.entries;
    // console.log('Private: Showing Make New Entry', res.locals.entries)
    res.render('private/user-private-create-entry', {user: user, entries: entries})
  },

  // Render One Blog Entry - Private View
  showPrivateOneEntry (req, res) {
    let entry = res.locals.entry;
    console.log('Private: Showing One Entry', res.locals.entry)
    res.render('private/user-private-single-entry', {entry: entry})
  },

  // Render One User Profile - Private View
  showPrivateUserProfile (req, res) {
    let user = req.session.user;
    let entries = res.locals.entries;
    // console.log('Private: Showing One User Profile', res.locals.entries)
    res.render('private/user-private-profile', {user: user, entries: entries})
  },

  // Views Show Edit Form
  showEditUserForm(req, res) {
    let user = res.locals.user;
    res.render('private/edit-user', {user: user})
  },

  handleLogin(req, res) {
    let user = req.session.user;
    console.log('from views controller', user.id)
    res.redirect(`/private/users/${user.id}`)
  },

  handleLogout(req, res) {
    res.redirect('/public');
  },

  handleRegisterNewUser(req, res) {
    res.redirect(`/public/users`)
  },
};
