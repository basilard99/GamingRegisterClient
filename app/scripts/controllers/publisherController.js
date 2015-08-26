'use strict';

var module = angular.module('publisherControllers');

module.controller('publisherController', function($scope, $http) {
    $scope.test = 'hello dolly!';
    $scope.addPublisher = function(item, event) {
        var dataObject = {
            name: $scope.pubName
        };

        var responsePromise = $http.post('http://localhost:8000/api/publishers', dataObject, {});
        responsePromise.success(function(dataFromServer, status, headers, config) {
            console.log(dataFromServer.title);
        });
        responsePromise.error(function(data, status, headers, config) {
            alert('Submitting form failed!');
        });
    };
});