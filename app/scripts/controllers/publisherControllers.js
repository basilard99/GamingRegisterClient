'use strict';

var publisherControllers = angular.module('publisherControllers', []);

publisherControllers.controller('publisherListController',
                                function publisherListController($http, locationService, publisherListService) {

    var vm = this;

    vm.publishers = [];
    vm.status = '';

    vm.loadPublisherList = function loadPublishersFromApi() {
        vm.status = 'Loading...';
        publisherListService.getPublisherList(locationService.getBaseLocation() + '/api/publisherList')
             .then(_loadSucceeded, _loadFailed);
    };

    function _loadSucceeded(list) {
        vm.publishers = list;
        vm.status = 'Success';
    };

    function _loadFailed(err) {
        // TODO: Add logging?
        vm.status = 'Unable to load publishers: ' + err;
    };

});

publisherControllers.controller('addPublisherController', function defineController($http, locationService) {

    var vm = this;
    vm.publisher = {
        name: '',
        webSite: '',
        code: '',
        isActive: true,
        description: ''
    };
    vm.addPublisherStatus = '';

    vm.addPublisher = function addPublisherToApi() {
        vm.addPublisherStatus = 'Processing...';
        $http.put(locationService.getBaseLocation() + '/api/publisherList/' + vm.publisher.code, vm.publisher)
             .then(_addSucceeded, _addFailed);
    };

    function _addSucceeded() {
        vm.addPublisherStatus = 'Publisher added successfully';
    }

    function _addFailed(response) {
        vm.addPublisherStatus = 'Failed to add publisher ' + response.status;
    }

});
