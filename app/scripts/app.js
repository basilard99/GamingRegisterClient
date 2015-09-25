'use strict';

var biclient = angular.module('biClientApp', ['ngRoute', 'mainControllers', 'publisherControllers']);

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
        .when('/publishersList', {
            templateUrl: 'app/views/publisherList.html',
            controller: 'addPublisherController'
        })
        .otherwise({
            redirectTo: '/main'
        });
    }]
);
