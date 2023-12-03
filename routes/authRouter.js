var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.validateRegister, authController.register);
router.post('/login', authController.login);

module.exports = router;
