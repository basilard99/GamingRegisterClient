'use strict';

var publisherControllers = angular.module('publisherControllers', []);

publisherControllers.controller('publisherListController', function defineController($http) {

    var vm = this;

    vm.publisherList = [];
    vm.status = '';

    vm.successfulCallback = function onSuccess(response) {
        vm.publisherList = response.data.publisherList;
    };

    vm.failureCallback = function onFailure() {
        // TODO: Add logging?
        vm.status = 'Unable to load publishers';
    };

    vm.loadPublisherList = function loadPublishersFromApi() {
        $http.get('http://localhost:8000/api/publishers')
             .then(vm.successfulCallback, vm.failureCallback);
    };

});
