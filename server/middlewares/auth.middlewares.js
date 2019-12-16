// Middleware to ensure the login
exports.ensureLogin = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect('/login');
  }
}