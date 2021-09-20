const express = require('express');
const { protect } = require('../middleware/auth');
const { 
    register,
    login,
    getMe,
    forgotPassword,
    resetPassword 
} = require('../controllers/authentication');


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);

module.exports = router;