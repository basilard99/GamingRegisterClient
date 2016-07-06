'use strict';

describe('The book controllers behave as follows -', function bookControllersTestSuite() {

    var addBookController;
    var $controller;
    var $httpBackend;
    var $http;

    var baseLocation = 'http://localhost:8100/api';

    beforeEach(angular.mock.module('utilityServices'));
    beforeEach(angular.mock.module('bookControllers'));

    beforeEach(angular.mock.inject(function setUpMocks(_$controller_, _$httpBackend_, _$http_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        $http = _$http_;

        addBookController = $controller('addBookController', { '$http': $http });
    }));

    describe('Within the add book controller - ', function addBookControllerTests() {

        describe('When a book is added - ', function addBookCalled() {

            it('the book will be sent to the API', function checkBookSentToApi() {

                var testBook = {
                    title: 'Scum and Villainy',
                    bookCode: 'FFG',
                    description: 'Test Description',
                    cost: '24.95',
                    inInventory: true,
                    isPdf: true,
                    isPrint: true,
                    location: 'Shelf 1',
                    type: 'RPG'
                };

                $httpBackend.expectPUT(baseLocation + '/books/Scum%20and%20Villainy', testBook).respond(201);

                addBookController.book = testBook;
                addBookController.addBook();

                $httpBackend.flush();
            });
        });

        describe('When the book is added successfully - ', function addBookWasSuccessful() {

            it('will update the status', function checkSuccessfulAdd() {
                var testBook = {
                    title: 'Scum and Villainy',
                    bookCode: 'FFG',
                    description: 'Test Description',
                    cost: '24.95',
                    inInventory: true,
                    isPdf: true,
                    isPrint: true,
                    location: 'Shelf 1',
                    type: 'RPG'
                };

                $httpBackend.expectPUT(baseLocation + '/books/Scum%20and%20Villainy', testBook).respond(201);

                addBookController.book = testBook;
                addBookController.addBook();

                $httpBackend.flush();

                expect(addBookController.addBookStatus).toBe('Book added successfully');
            });

        });

        describe('When the book is not added successfully - ', function addBookWasSuccessful() {

            it('will update the status', function checkFailedAdd() {
                var testBook = {
                    title: 'Scum and Villainy',
                    bookCode: 'FFG',
                    description: 'Test Description',
                    cost: '24.95',
                    inInventory: true,
                    isPdf: true,
                    isPrint: true,
                    location: 'Shelf 1',
                    type: 'RPG'
                };

                $httpBackend.expectPUT(baseLocation + '/books/Scum%20and%20Villainy', testBook).respond(500);

                addBookController.book = testBook;
                addBookController.addBook();

                $httpBackend.flush();

                expect(addBookController.addBookStatus).toBe('Failed to add book: 500');
            });
        });
    });

    afterEach(function verifyFinal() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});
