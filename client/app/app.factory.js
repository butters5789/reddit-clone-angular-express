(function() {
    'use strict';

    angular.module('RedditClone')
        .factory('redditServices', factory);


    factory.$inject = ['$http'];

    function factory($http) {

        var service = {
            allPostings: getAllPostings,
            allComments: getAllComments,
            voteUp: postVoteUp,
            voteDown: postVoteDown,
            addNewComment: postAddNewComment
        };

        return service;

        function getAllPostings() {
            return $http.get('http://localhost:3000/api/postings')
                .then(function(res) {
                    return res;
                })
                .catch(function(err) {
                    return err;
                });
        }

        function getAllComments() {
            return $http.get('http://localhost:3000/api/comments')
                .then(function(res) {
                    return res;
                })
                .catch(function(err) {
                    return err;
                });
        }

        function postVoteUp(post) {
            post.votes++;
            return $http.post('http://localhost:3000/api/postings/votes', {
                    'id': post.id,
                    'votes': post.votes
                })
                .then(function(res) {
                    return res;
                })
                .catch(function(err) {
                    return err;
                });
        }

        function postVoteDown(post) {
            post.votes--;
            return $http.post('http://localhost:3000/api/postings/votes', {
                    'id': post.id,
                    'votes': post.votes
                })
                .then(function(res) {
                    return res;
                })
                .catch(function(err) {
                    return err;
                });
        }

        function postAddNewComment(comment) {
            return $http.post('http://localhost:3000/api/newComment', {
                    'author_id': comment.newComment.author_id,
                    'comment': comment.newComment.comment,
                    'posting_id': comment.post_id
                })
                .then(function(res) {
                    return res;
                })
                .catch(function(err) {
                    return err;
                });
        }

    }

}());
