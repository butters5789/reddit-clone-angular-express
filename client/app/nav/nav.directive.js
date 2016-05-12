(function() {
    'use strict';

    angular.module('RedditClone')
        .directive('rcNav', navDirective);

    function navDirective() {
        return {
            scope: {},
            templateUrl: '/app/nav/nav.directive.html',
            controller: controller,
            controllerAs: 'vm'
        };
    }

    controller.$inject = ['$http'];

    function controller($http) {
        var vm = this;
        activate();

        function activate() {

        }

    }

})();
