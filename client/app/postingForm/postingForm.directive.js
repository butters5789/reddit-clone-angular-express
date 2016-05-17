(function() {
    'use strict';

    angular.module('RedditClone')
        .directive('rcPostingform', postingFormDirective);

    function postingFormDirective() {
        return {
            templateUrl: '/app/postingForm/postingForm.directive.html',
            controller: controller,
            controllerAs: 'post'
        };
    }

    controller.$inject = ['$http', '$scope'];

    function controller($http, $scope) {
        var post = this;

        post.showPostingForm = false;

    }

})();
