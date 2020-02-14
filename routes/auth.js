const express = require('express');
const router = express();
const authController = require('../controller/authController');
const jwt = require('express-jwt');
const asyncMiddleware = require("./../middleware").asyncMiddleware;

router.post(
    '/register-user',
    asyncMiddleware(authController.registerUser)
);


module.exports = router;

