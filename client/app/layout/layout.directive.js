(function() {
    'use strict';

    angular.module('RedditClone')
        .directive('rcApp', appDirective);

    function appDirective() {
        return {
            restrict: 'E',
            templateUrl: '/app/layout/layout.directive.html',
            controller: controller,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    controller.$inject = ['$http', '$scope'];

    function controller($http, $scope) {
        var vm = this;

    }

})();
