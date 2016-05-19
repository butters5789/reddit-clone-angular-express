(function() {
    'use strict';

    angular.module('RedditClone')
        .directive('rcPostingform', postingFormDirective);

    function postingFormDirective() {
        return {
            templateUrl: '/app/postingForm/postingForm.directive.html',
            controller: controller,
            controllerAs: 'postingForm',
            bindToController: true
        };
    }

    controller.$inject = ['$scope', 'redditServices'];

    function controller($scope, redditServices) {
        var postingForm = this;

        postingForm.showPostingForm = false;
        postingForm.addNewPosting = newPosting;

        function activate() {
            redditServices.allPostings().then(function(res) {
                if (res.status !== 200) {
                    console.log(res);
                } else {
                    postingForm.newPosting = {};
                    $scope.addPosting.$setUntouched();
                    postingForm.showPostingForm = false;
                    return $scope.postings.allPostings = res.data;
                }
            });
        }

        function newPosting(posting) {
            redditServices.newPosting(posting).then(function(res) {
                if (res.status !== 200) {
                    console.log(res);
                } else {
                    activate();
                }
            });
        }

    }

})();
