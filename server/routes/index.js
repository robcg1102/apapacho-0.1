
const router = require('express').Router()
const passport = require('passport')
const {
  signup,
  login,
  logout,
  getUser
} = require('../controllers/auth.controller')

const {
  createComment,
  getComments
} = require('../controllers/comment.controller')

router.post('/signup', signup)
router.post('/login', passport.authenticate('local'), login)
router.get('/profile', getUser)
router.get('/logout', logout)

router.post('/create', createComment)
router.get('/comments', getComments)

module.exports = router