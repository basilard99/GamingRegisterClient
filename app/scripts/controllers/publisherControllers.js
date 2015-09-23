'use strict';

var module = angular.module('publisherControllers');

module.controller('addPublisherController', function defineController($scope, $http) {
});

/*
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

*/
