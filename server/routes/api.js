const express = require('express');
const router = express.Router();
const knex = require('../db');

router.get('/', function(req, res, next) {
    res.json({
        welcome: 'Hello World'
    });
});

module.exports = router;
