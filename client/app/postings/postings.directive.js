(function() {
    'use strict';

    angular.module('RedditClone')
        .directive('rcPostings', postingsDirective);

    function postingsDirective() {
        return {
            templateUrl: '/app/postings/postings.directive.html',
            controller: controller,
            controllerAs: 'postings',
            bindToController: true
        };
    }

    controller.$inject = ['$http', '$scope', 'redditServices'];

    function controller($http, $scope, redditServices) {
        var postings = this;

        postings.allPostings = [];
        postings.voteUp = upVote;
        postings.voteDown = downVote;
        activate();

        function activate() {
            redditServices.allPostings().then(function(data) {
                postings.allPostings = data;
                return postings.allPostings;
            });
        }

        function upVote(post) {
            redditServices.voteUp(post);
        }

        function downVote(post) {
            redditServices.voteDown(post);
        }
    }

})();
