(function() {
    'use strict';

    angular.module('RedditClone')
        .directive('rcApp', appDirective);

    function appDirective() {
        return {
            restrict: 'E',
            templateUrl: '/app/layout/layout.directive.html',
            controller: controller,
            controllerAs: 'layout'
        };
    }

    controller.$inject = ['$http', '$scope'];

    function controller($http, $scope) {
        var layout = this;

        layout.hello = "layout says hello";

        console.log('layout', $scope.layout);
        console.log('layout', $scope.nav);
        console.log('layout', $scope.post);

        activate();
        function activate() {

        }

    }

})();
