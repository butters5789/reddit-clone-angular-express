(function() {
    'use strict';

    angular.module('RedditClone')
        .directive('rcNav', navDirective);

    function navDirective() {
        return {
            templateUrl: '/app/nav/nav.directive.html',
            controller: controller,
            controllerAs: 'nav'
        };
    }

    controller.$inject = ['$http', '$scope'];

    function controller($http, $scope) {
        var nav = this;

        nav.clickSubmitPost = function() {
            $scope.post.showPostingForm = !$scope.post.showPostingForm;
        };

    }

})();
