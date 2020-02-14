const express = require('express');
const router = express();
const authController = require('../controller/authController');
const asyncMiddleware = require("./../middleware").asyncMiddleware;

router.get(
    '/status',
    authController.validateUser
);
module.exports = router;
