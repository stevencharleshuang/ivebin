module.exports = {

  // Views Show Homepage
  showHomepage(req, res) {
    let newUserId = req.body.length
    console.log(req.body.id)
    res.render('home/index', {newUserId: newUserId});
  },

  // Views Show One User Profile
  showUserProfile(req, res) {
    let user = res.locals.user
    res.render('public/user-public-profile', {user: user})
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
