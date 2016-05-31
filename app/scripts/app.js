'use strict';

var biclient = angular.module('biClientApp', ['ngRoute', 'mainControllers', 'publisherControllers', 'bookControllers', 'utilityServices']);

biclient.config(['$routeProvider', function configureRoutes($routeProvider) {

    $routeProvider
        .when('/main', {
            templateUrl: 'app/views/main.html'
        })
        .when('/publishersList', {
            templateUrl: 'app/views/publisherList.html'
        })
        .when('/addPublisher', {
            templateUrl: 'app/views/addPublisher.html'
        })
        .when('/addBook', {
            templateUrl: 'app/views/addBook.html'
        })
        .otherwise({
            redirectTo: '/main'
        });
    }]
);
