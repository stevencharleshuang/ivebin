module.exports = {

  showPrivateUserProfile (req, res) {
    let entries = res.locals.entries
    console.log(res.locals.entries)
    res.render('private/user-private-profile', {entries: entries})
  },

};
