'use strict';

var biclient = angular.module('biClientApp', ['ngRoute', 'mainControllers', 'publisherControllers']);

biclient.config(['$routeProvider', function configureRoutes($routeProvider) {

    $routeProvider
        .when('/main', {
            templateUrl: 'app/views/main.html'
        })
        .when('/publishersList', {
            templateUrl: 'app/views/publisherList.html'
        })
        .otherwise({
            redirectTo: '/main'
        });
    }]
);
