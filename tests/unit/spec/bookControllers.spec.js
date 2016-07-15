'use strict';

describe('Book Controllers -', function bookControllersTestSuite() {

    var addBookController;
    var locationService;
    var publisherListService;
    var $controller;
    var $httpBackend;
    var $http;
    var $rootScope;
    var $q;

    var baseLocation = 'http://localhost:8100/api';

    beforeEach(function setUpForEachTest() {

        module('utilityServices');
        module('bookControllers');
        module('publisherServices');

        module(function createMockPublisherListService($provide) {
            $provide.service('publisherListService', function createSpyForGetPublisherList() {
                this.getPublisherList = jasmine.createSpy('getPublisherList');
            });
        });

        inject(function setUpMocks(_$controller_, _$httpBackend_, _$http_, _$q_,
                                   _$rootScope_, _locationService_, _publisherListService_) {
            $controller = _$controller_;
            $httpBackend = _$httpBackend_;
            $http = _$http_;
            $rootScope = _$rootScope_;
            $q = _$q_;

            locationService = _locationService_;
            publisherListService = _publisherListService_;
        });

    });

    describe('Add Book Controller - ', function addBookControllerTests() {

        describe('When the controller is created - ', function testControllerCreated() {

            it('The book model will be defaulted', function testBookModelDefaulted() {
                defineSuccessfulRemoteGet();

                expect(addBookController.book.title).toEqual('');
                expect(addBookController.book.bookCode).toEqual('');
                expect(addBookController.book.description).toEqual('');
                expect(addBookController.book.cost).toEqual(0.0);
                expect(addBookController.book.inInventory).toEqual(true);
                expect(addBookController.book.isPdf).toEqual(false);
                expect(addBookController.book.isPrint).toEqual(true);
                expect(addBookController.book.location).toEqual('');
                expect(addBookController.book.type).toEqual('RPG');
            });

            it('The publisher list will say waiting while loading, then show publishers if successful', function testPublisherListDefaulted() {
                defineSuccessfulRemoteGet();

                expect(publisherListService.getPublisherList.calls.count()).toEqual(1);
                expect(addBookController.publisherList[0].name).toEqual('Waiting...');
                $rootScope.$digest();
                expect(addBookController.publisherList[0].name).toEqual('Fantasy Flight Games');
                expect(addBookController.publisherList.length).toEqual(2);
            });

            it('The publisher list will say waiting while loading, then show error if failed', function testPublisherListDefaulted() {
                defineFailedRemoteGet();

                expect(publisherListService.getPublisherList.calls.count()).toEqual(1);
                expect(addBookController.publisherList[0].name).toEqual('Waiting...');
                $rootScope.$digest();
                expect(addBookController.publisherList[0].name).toEqual('Could not get the publisher list');
                expect(addBookController.publisherList.length).toEqual(1);
            });

        });

        describe('When a book is added - ', function addBookCalled() {

            it('if successful, the API is called and the screen is updated', function checkBookSentToApi() {
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

                defineSuccessfulRemoteGet();
                $httpBackend.expectPUT(baseLocation + '/books/Scum%20and%20Villainy', testBook).respond(201);

                addBookController.book = testBook;
                addBookController.addBook();

                $httpBackend.flush();

                expect(addBookController.addBookStatus).toBe('Book added successfully');
            });

            it('if failed, the API is called and the screen is updated', function checkBookSentToApi() {
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

                defineSuccessfulRemoteGet();
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

    function defineSuccessfulRemoteGet() {
        publisherListService.getPublisherList.and.callFake(function createFakeForGetPublisherList() {
            return $q(function definePromise(resolve) {
                resolve([{ name: 'Fantasy Flight Games', uri: 'publisherList/FFG' },
                         { name: 'Pinnacle Entertainment Group', uri: 'publisherList/PEG' }]);
            });
        });

        publisherListService.getPublisherList.calls.reset();
        addBookController = $controller('addBookController',
                                        {
                                            '$http': $http,
                                            'locationService': locationService,
                                            'publisherListService': publisherListService
                                        });
    }

    function defineFailedRemoteGet() {
        publisherListService.getPublisherList.and.callFake(function createFakeForGetPublisherList() {
            return $q(function definePromise(resolve, reject) {
                reject();
            });
        });

        publisherListService.getPublisherList.calls.reset();
        addBookController = $controller('addBookController',
                                        {
                                            '$http': $http,
                                            'locationService': locationService,
                                            'publisherListService': publisherListService
                                        });
    }
});
