'use strict';

var bookControllers = angular.module('bookControllers', []);

bookControllers.controller('addBookController',
                           function defineController($http, locationService, publisherListService) {

    var vm = this;

    vm.addBook = function sendBookToApi() {
        vm.status = 'Saving...';
        console.log(vm.book.publisher);
        $http.put(locationService.getBaseLocation() + '/api/books/' + encodeURIComponent(vm.book.title), vm.book)
             .then(function succeeded() {
                      vm.addBookStatus = 'Book added successfully';
                   },
                   function failed(response) {
                      vm.addBookStatus = 'Failed to add book: ' + response.status;
                   });
    };

    (function initializeControllerData() {

        vm.book = {
            title: '',
            publisher: '',
            bookCode: '',
            description: '',
            cost: 0.00,
            inInventory: true,
            isPdf: false,
            isPrint: true,
            location: '',
            type: 'RPG'
        };

        vm.addBookStatus = '';
        vm.publisherList = [{ name: 'Waiting...' }];

        publisherListService.getPublisherList(locationService.getBaseLocation() + '/api/publisherList')
            .then(function getPublishersSucceeded(result) {
                vm.publisherList = result;
                vm.book.publisher = vm.publisherList[0].uri;
            }, function getPublishersFailed() {
                vm.publisherList = [{ name: 'Could not get the publisher list' }];
            });

    })();

});
