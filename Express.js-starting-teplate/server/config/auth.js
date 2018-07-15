module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.locals.globalError = 'Not autorized! Login or Register'
      res.redirect('/users/login')
    }
  },
  isInRole: (role) => {
    return (req, res, next) => {
      if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
        next()
      } else {
        res.locals.globalError = 'Not autorized! Login or Register'
        res.redirect('/users/login')
      }
    }
  }
}
