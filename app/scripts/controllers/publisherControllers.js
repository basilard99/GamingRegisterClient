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

publisherControllers.controller('addPublisherController', function defineController($http) {

    var vm = this;
    var defaultPublisher = {
        name: "",
        webSite: "",
        code: "XXX",
        isActive: true
    };

    vm.publisher = defaultPublisher;
    vm.addPublisher = function addPublisherToApi() {
        console.log(vm.publisher);
    }

});
