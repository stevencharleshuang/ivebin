module.exports = {

  // Views Show One Public Entry From One User
  showOnePublicEntry(req, res) {
    let entry = res.locals.entry
    // let entry = req.params.id
    console.log('From views controller, public user one entry: ', entry)
    res.render('public/user-public-entry', {entry: entry})
  },

  // Views Show One User Profile
  showUserProfile(req, res) {
    let user = res.locals.user
    console.log('From Public Views Controller, user:', user)
    // res.json(user);
    res.render('public/user-public-profile', {user: user})
  },

  // Views Show Homepage
  showHomepage(req, res) {
    console.log('From Public Views Controller, rendered showHomepage()')
    res.render('home/index');
  },

  // showUserProfile(req, res) {
  //   let user = res.locals.newUser
  //   res.redirect(`users/${user.id}`);
  // },

  // Views Show All Users
  showAllUsers(req, res) {
    let users = res.locals.users
    res.render('public/directory', {users: users})
  },

  // // Views Show Edit Form
  // showEditForm(req, res) {
  //   let user = res.locals.user
  //   res.render('private/edit-user', {user: user})
  // },

};
