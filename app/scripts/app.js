var app = angular.module('jangkrikApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .when('/about', {
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
            })
            .when('/behaviour', {
                templateUrl: 'templates/behaviour.html',
                controller: 'BehaviourCtrl'
            })
            .when('/404', {
                template: '<h1>404 | Not Found</h1>'
            })
            .otherwise({ redirectTo: '/404' });

        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });

    }
]);