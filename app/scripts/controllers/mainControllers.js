'use strict';

var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('mainSelectionController', ['$scope',
                                                       '$location',
                                                       function defineController($scope, $location) {

    $scope.listPublishers = function listPublishers() {
        $location.path('/publishersList');
    };

    $scope.addPublisher = function addPublisher() {
        $location.path('/addPublisher');
    };

}]);
