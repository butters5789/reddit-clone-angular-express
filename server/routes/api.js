const express = require('express');
const router = express.Router();
const knex = require('../db');

router.get('/postings', function(req, res, next) {
    knex('postings')
        .join('users', 'postings.author_id', 'users.id')
        .then(function(posting) {
            res.json(posting);
        });
});

router.post('/postings/votes/', function(req, res, next) {
    knex('postings')
        .where({ id: req.body.id })
        .update({ votes: req.body.votes })
        .then(function() {
            res.end();
        });
});

module.exports = router;
