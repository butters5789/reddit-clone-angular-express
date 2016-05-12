(function() {
    'use strict';

    angular.module('RedditClone')
        .factory('redditServices', factory);


    factory.$inject = ['$http'];

    function factory($http) {
        var service = {
            postingFormStatus: getPostingFormStatus
        };

        return service;

        function getPostingFormStatus(data) {
            return data;
        }
    }

}());
