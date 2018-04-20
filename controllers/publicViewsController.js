module.exports = {

  showHomepage(req, res) {
    const newUserId = req.body.length
    console.log(req.body.id)
    res.render('home/index', {newUserId: newUserId});
  },

  showUserProfile(req, res) {
    const user = res.locals.user
    res.render('public/user-public-profile', {user: user})
  },

  // showUserProfile(req, res) {
  //   let user = res.locals.newUser
  //   res.redirect(`users/${user.id}`);
  // },

  showAllUsers(req, res) {
    const users = res.locals.users
    res.render('public/directory', {users: users, reslocs: res.locals})
  },

  showEditForm(req, res) {
    res.render('')
  }
};
