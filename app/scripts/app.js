var app = angular.module('jangkrikApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .when('/home', {
                redirectTo: '/'
            })
            .when('/about', {
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
            })
            .when('/behaviour', {
                templateUrl: 'templates/behaviour.html',
                controller: 'BehaviourCtrl'
            })
            .when('/culture', {
                templateUrl: 'templates/culture.html',
                controller: 'CultureCtrl'
            })
            .when('/gallery', {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            })
            .when('/contact', {
                templateUrl: 'templates/contact.html',
                controller: 'ContactCtrl'
            })
            .when('/404', {
                template: '404 | Not Found'
            })
            .otherwise({ redirectTo: '/404' });

        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });

    }
]);