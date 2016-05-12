(function() {
    'use strict';

    angular.module('RedditClone')
        .directive('rcApp', appDirective);

    function appDirective() {
        return {
            restrict: 'E',
            templateUrl: '/app/layout/layout.directive.html'
        };
    }

})();
