'use strict';

var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('mainSelectionController', ['$scope', '$location', '$http', function($scope, $location, $http) {

    $scope.listPublishers = function(item, event) {
        alert('Selected Publishers');
    };

    $scope.addPublisher = function(item, event) {
        $location.path('/addPublisher')
    };

}])