(function() {
    'use strict';

    angular.module('RedditClone')
        .factory('redditServices', factory);


    factory.$inject = ['$http'];

    function factory($http) {

        var service = {
            allPostings: getAllPostings,
            voteUp: getVoteUp,
            voteDown: getVoteDown
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

        function getVoteUp(post) {
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

        function getVoteDown(post) {
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

    }

}());
