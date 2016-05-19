(function() {
    'use strict';

    angular.module('RedditClone')
        .directive('rcNav', navDirective);

    function navDirective() {
        return {
            templateUrl: '/app/nav/nav.directive.html',
            controller: controller,
            controllerAs: 'nav',
            bindToController: true
        };
    }

    controller.$inject = ['$http', '$scope'];

    function controller($http, $scope) {
        var nav = this;
        nav.sort = "votes";

        nav.clickSubmitPost = function() {
            $scope.postingForm.showPostingForm = !$scope.postingForm.showPostingForm;
        };
    }

})();
