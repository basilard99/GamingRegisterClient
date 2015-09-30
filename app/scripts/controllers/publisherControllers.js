'use strict';

var publisherControllers = angular.module('publisherControllers', []);

publisherControllers.controller('publisherListController', function defineController($scope, $http) {

    $scope.publishers = [];
    $scope.status = '';

    $scope.loadPublishers = function loadPublishers() {
        $http.get('http://localhost:8000/api/publishers').
            then(function success(response) {
                $scope.publishers = response.data.publisherList;
            }, function failure() {
                // TODO: Add logging?
                $scope.status = 'Unable to load publishers.';
            }
        );
    };
});
