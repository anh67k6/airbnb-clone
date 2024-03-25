const express = require('express');
const router = express.Router();

const {
  register,
  login,
  logout,
  profile
} = require('../controllers/userController');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').post(logout);
router.route('/profile').get(profile);
module.exports = router;
