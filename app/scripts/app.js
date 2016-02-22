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
        .when('/addPublisher', {
            templateUrl: 'app/views/addPublishe.html'
        })
        .otherwise({
            redirectTo: '/main'
        });
    }]
);
