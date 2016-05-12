(function() {
    'use strict';

    angular.module('RedditClone')
        .directive('rcNav', navDirective);

    function navDirective() {
        return {
            scope: {},
            templateUrl: '/app/nav/nav.directive.html',
            controller: controller,
            controllerAs: 'nav'
        };
    }

    controller.$inject = ['$http', '$scope'];

    function controller($http, $scope) {
        var nav = this;

        nav.hello = "nav says hello";

        nav.clickSubmitPost = function() {
            if (vm.showPostingForm) {
                vm.showPostingForm = false;
            } else {
                vm.showPostingForm = true;
            }
        };
        activate();
        function activate() {

        }

    }

})();
