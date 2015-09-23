'use strict';

var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('mainSelectionController', ['$scope',
                                                       '$location',
                                                       '$http',
                                                       function defineController($scope, $location, $http) {

    $scope.listPublishers = function listPublishers(item, event) {
        alert('Selected Publishers');
    };

    $scope.addPublisher = function addPublisher(item, event) {
        $location.path('/addPublisher');
    };

}]);
