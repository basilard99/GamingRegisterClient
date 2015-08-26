'use strict';

var biclient = angular.module('biClientApp', ['ngRoute', 'mainControllers']);

biclient.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/main', {
            templateUrl: 'app/views/main.html',
            controller: 'mainSelectionController'
        })
        .when('/addPublisher', {
            templateUrl: 'app/views/addPublisher.html',
            controller: 'mainController'
        })
        .otherwise({
            redirectTo: '/main'
        });
    }]
);