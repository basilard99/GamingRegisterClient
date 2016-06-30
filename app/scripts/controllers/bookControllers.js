'use strict';

var bookControllers = angular.module('bookControllers', []);

bookControllers.controller('addBookController', function defineController($http, locationService) {

    var vm = this;
    vm.book = {
        title: '',
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

    vm.addBook = function sendBookToApi() {
        vm.status = 'Loading...';
        $http.put(locationService.getBaseLocation() + '/api/books/' + encodeURIComponent(vm.book.title), vm.book)
             .then(_loadSucceeded, _loadFailed);
    };

    function _loadSucceeded() {
        vm.addBookStatus = 'Book added successfully';
    };

    function _loadFailed(response) {
        vm.addBookStatus = 'Failed to add book: ' + response.status;
    };

});
