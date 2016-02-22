'use strict';

var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('mainSelectionController', ['$location',
                                                       function defineController($location) {

    var vm = this;

    vm.listPublishers = function listPublishers() {
        $location.path('/publishersList');
    };

    vm.addPublisher = function addPublisher() {
        console.log('HERE');
        $location.path('/addPublisher');
    };

}]);
