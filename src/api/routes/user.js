const express = require('express');
const middlewares = require('../middlewares');
const route = express.Router();

module.exports = (app) => {
    app.use('/users', route);

    route.get('/me', middlewares.isAuth, middlewares.attachCurrentUser, (req, res) => {
        return res.json({ user: req.currentUser }).status(200);
    });
};