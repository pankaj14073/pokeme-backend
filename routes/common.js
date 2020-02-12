const express = require('express');
const router = express();
const authController = require('../controller/authController');
router.get(
    '/status',
    authController.validateUser
);
module.exports = router;
