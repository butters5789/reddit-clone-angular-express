(function() {
    'use strict';

    angular.module('RedditClone')
        .directive('rcComments', commentsDirective);

    function commentsDirective() {
        return {
            templateUrl: '/app/comments/comments.directive.html',
            controller: controller,
            controllerAs: 'comments',
            bindToController: true
        };
    }

    controller.$inject = ['$scope', 'redditServices'];

    function controller($scope, redditServices) {
        var comments = this;

        comments.allComments = [];
        comments.addNewComment = newComment;
        comments.hideCommentForm = false;
        comments.hideComments = false;
        activate();

        function activate() {
            redditServices.allComments().then(function(res) {
                if (res.status !== 200) {
                    console.log(res);
                } else {
                    comments.newComment = {};
                    $scope.addComment.$setUntouched();
                    comments.hideCommentForm = false;
                    return comments.allComments = res.data;
                }
            });
        }

        function newComment(comment) {
            redditServices.addNewComment(comment).then(function(res) {
                if (res.status !== 200) {
                    console.log(res);
                } else {
                    activate();
                }
            });
        }

        comments.showAddComment = function() {
            comments.hideCommentForm = !comments.hideCommentForm;
        }

        comments.showComments = function() {
            comments.hideComments = !comments.hideComments;
        }

    }

})();
