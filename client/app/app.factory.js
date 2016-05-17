(function() {
    'use strict';

    angular.module('RedditClone')
        .factory('redditServices', factory);


    factory.$inject = ['$http'];

    function factory($http) {
        var service = {
            trueFalseSwitch: flip,
            switcher: true
        };

        return service;

        function flip() {
            this.switcher = !this.switcher;
            return this.switcher;
        }
    }

}());
