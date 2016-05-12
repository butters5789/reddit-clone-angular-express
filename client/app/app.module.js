(function() {
    'use strict';

    var dependencies = ['ui.router'];

    angular.module('RedditClone', dependencies)
        .config(setupRoutes);

    setupRoutes.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider'
    ];

    function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: '<rc-app></rc-app>'
            });
    }

})();
