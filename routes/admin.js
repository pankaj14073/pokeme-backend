const express = require('express');
const router = express();
const UserController = require('../controller/UserController');
const jwt = require('express-jwt');
const asyncMiddleware = require("./../middleware").asyncMiddleware;
router.get(
    '/status',
    asyncMiddleware(UserController.validateUser)
);
router.get(
    '/add-user',
    asyncMiddleware(UserController.addUser)
);
router.get(
    '/get-user',
    asyncMiddleware(UserController.getUser)
);

module.exports = router;

