const express = require('express');
const router = express.Router();
const { signup,signin, logout, userProfile } = require('../controllers/authController');

module.exports = router;

//auth routes
// /api/signup
router.post('/signup', signup);
// /api/signin
router.post('/signin', signin);
// /api/logout
router.get('/logout', logout);
// /api/me
router.get('/me', isAutheticated ,userProfile);



module.exports = router;