const express = require('express');
const router = express();
const authController = require('../controller/authController');
const jwt = require('express-jwt');
router.get(
    '/status',
    authController.validateUser
);
module.exports = router;

