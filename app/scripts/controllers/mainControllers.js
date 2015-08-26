'use strict';

var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('mainSelectionController', ['$scope', '$http', function($scope, $http) {

    $scope.publishers = function(item, event) {
        alert('Selected Publishers');
    };

}])