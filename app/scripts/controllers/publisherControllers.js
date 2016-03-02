'use strict';

var publisherControllers = angular.module('publisherControllers', []);

publisherControllers.controller('publisherListController', function defineController($http) {

    var vm = this;

    vm.publishers = [];
    vm.status = '';

    vm.successfulCallback = function onSuccess(response) {
        vm.publishers = response.data.list;
        vm.status = 'Success';
    };

    vm.failureCallback = function onFailure() {
        // TODO: Add logging?
        vm.status = 'Unable to load publishers';
    };

    vm.loadPublisherList = function loadPublishersFromApi() {
        vm.status = 'Loading...';
        $http.get('http://localhost:8000/api/publisherList')
             .then(vm.successfulCallback, vm.failureCallback);
    };

});

publisherControllers.controller('addPublisherController', function defineController($http, locationService) {

    var vm = this;
    var defaultPublisher = {
        name: '',
        webSite: '',
        code: '',
        isActive: true,
        description: ''
    };

    vm.addSuccessful = function onSuccess() {
        vm.addPublisherStatus = 'Publisher added successfully';
    }

    vm.addFailed = function onFailure(response) {
        vm.addPublisherStatus = 'Failed to add publisher ' + response.status;
    }

    vm.addPublisherStatus = '';
    vm.publisher = defaultPublisher;

    vm.addPublisher = function addPublisherToApi() {
        vm.addPublisherStatus = 'Processing...';
        $http.put(locationService.getBaseLocation() + '/api/publisherList/' + vm.publisher.code, vm.publisher)
             .then(vm.addSuccessful, vm.addFailed);
    };

});
