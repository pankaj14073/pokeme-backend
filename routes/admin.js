const express = require('express');
const router = express();
const authController = require('../controller/authController');
const jwt = require('express-jwt');
const asyncMiddleware=require("./../middleware").asyncMiddleware;
router.get(
    '/status',
    asyncMiddleware(authController.validateUser)
);
router.get(
    '/add-user',
    asyncMiddleware(authController.addUser)
);
router.get(
    '/get-user',
    asyncMiddleware(authController.getUser)
);
module.exports = router;

