module.exports = {

  showHomepage(req, res) {
    const newUserId = req.body.length
    console.log(req.body.id)
    res.render('home/index', {newUserId: newUserId});
  },

  showUserProfile(req,res) {
    student = res.locals.newUser
    res.redirect(`users/${user.id}`);
  }
};
