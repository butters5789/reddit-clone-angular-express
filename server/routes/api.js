var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

router.get('/', function(req, res, next) {
    res.json({
        welcome: 'Hello World'
    });
});

module.exports = router;
