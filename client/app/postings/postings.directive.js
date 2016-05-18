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

    controller.$inject = ['redditServices'];

    function controller(redditServices) {
        var postings = this;

        postings.allPostings = [];
        postings.voteUp = upVote;
        postings.voteDown = downVote;
        activate();

        function activate() {
            redditServices.allPostings().then(function(res) {
                if (res.status !== 200) {
                    console.log(res);
                } else {
                    return postings.allPostings = res.data;
                }
            });
        }

        function upVote(post) {
            redditServices.voteUp(post).then(function(res) {
                if (res.status !== 200) {
                    console.log(res);
                }
            });
        }

        function downVote(post) {
            redditServices.voteDown(post).then(function(res) {
                if (res.status !== 200) {
                    console.log(res);
                }
            });
        }

    }

})();
