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
                    return res.data;
                });
        }

        function getVoteUp(post) {
            post.votes++;
            return $http.post('http://localhost:3000/api/postings/votes', {
                    'id': post.id,
                    'votes': post.votes
                })
                .then(function(res) {
                    // console.log('res', res);
                })
                .catch(function(err) {
                    console.log('err', err);
                });
        }

        function getVoteDown(post) {
            post.votes--;
            return $http.post('http://localhost:3000/api/postings/votes', {
                    'id': post.id,
                    'votes': post.votes
                })
                .then(function(res) {
                    // console.log('res', res);
                })
                .catch(function(err) {
                    console.log('err', err);
                });
        }
    }

}());
