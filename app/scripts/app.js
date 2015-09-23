'use strict';

var biclient = angular.module('biClientApp', ['ngRoute', 'mainControllers']);

biclient.config(['$routeProvider', function configureRoutes($routeProvider) {

    $routeProvider
        .when('/main', {
            templateUrl: 'app/views/main.html',
            controller: 'mainSelectionController'
        })
        .when('/addPublisher', {
            templateUrl: 'app/views/addPublisher.html',
            controller: 'addPublisherController'
        })
        .otherwise({
            redirectTo: '/main'
        });
    }]
);
