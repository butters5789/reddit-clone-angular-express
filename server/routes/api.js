const express = require('express');
const router = express.Router();
const knex = require('../db');

router.get('/postings', function(req, res, next) {
    knex('postings')
        .join('users', 'postings.author_id', 'users.id')
        .select('postings.id',
                'postings.title',
                'postings.created_at',
                'postings.posting',
                'postings.votes',
                'postings.image_url',
                'users.first_name',
                'users.last_name'
            )
        .then(function(posting) {
            res.json(posting);
        });
});

router.post('/newPosting', function(req, res, next) {
    knex('postings')
        .insert({
            author_id: req.body.author_id,
            title: req.body.title,
            image_url: req.body.image_url,
            posting: req.body.posting
        })
        .then(function(data) {
            res.end();
        });
});

router.get('/comments', function(req, res, next) {
    knex('comments')
        .join('users', 'comments.author_id', 'users.id')
        .select('comments.posting_id',
                'users.first_name',
                'users.last_name',
                'comments.comment'
            )
        .then(function(comments) {
            res.json(comments);
        });
});

router.post('/newComment', function(req, res, next) {
    knex('comments')
        .insert({
            posting_id: req.body.posting_id,
            author_id: req.body.author_id,
            comment: req.body.comment
        })
        .then(function() {
            res.end();
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
