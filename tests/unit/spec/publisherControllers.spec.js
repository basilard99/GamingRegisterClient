'use strict';

describe('The publisher controllers behave as follows -', function publisherControllersTestSuite() {

    var publisherController;
    var addPublisherController;
    var $controller;
    var $httpBackend;
    var $http;

    var testData = { 'list': [
                        'Fantasy Flight Games',
                        'Wizards of the Coast',
                        'Pinnacle Entertainment Group'
                    ]
    };

    var baseLocation = 'http://localhost:8100/api';

    beforeEach(angular.mock.module('utilityServices'));
    beforeEach(angular.mock.module('publisherServices'));
    beforeEach(angular.mock.module('publisherControllers'));

    beforeEach(angular.mock.inject(function setUpMocks(_$controller_, _$httpBackend_, _$http_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        $http = _$http_;

        publisherController = $controller('publisherListController', { '$http': $http });
        addPublisherController = $controller('addPublisherController', { '$http': $http });
    }));

    describe('Given the publisherListController -', function publisherListControllerTests() {

        describe('When the publisher list is loaded successfully -', function successfulPublisherAPICall() {

            it('then the publishers are added to the controller', function checkList() {
                $httpBackend.expect('GET', baseLocation + '/publisherList').respond(testData);
                publisherController.loadPublisherList();
                $httpBackend.flush();

                expect(publisherController.publishers.length).toBe(3);
            });

            it('then the status should be \'Success \'', function checkStatusSuccess() {
                $httpBackend.expect('GET', baseLocation + '/publisherList').respond(testData);
                publisherController.loadPublisherList();
                $httpBackend.flush();

                expect(publisherController.status).toBe('Success');
            });

        });

        describe('When the publisher list fails to load -', function failedPublisherAPICall() {

            it('then the publisher list will be empty ', function checkList() {
                $httpBackend.expect('GET', baseLocation + '/publisherList').respond(404, '');
                publisherController.loadPublisherList();
                $httpBackend.flush();

                expect(publisherController.publishers.length).toBe(0);
            });

            it('then the status will be \'Unable to load publishers\'', function checkList() {
                $httpBackend.expect('GET', baseLocation + '/publisherList').respond(404, '');
                publisherController.loadPublisherList();
                $httpBackend.flush();

                expect(publisherController.status).toBe('Unable to load publishers: 404');
            });

        });

    });

    describe('Given the publisherController - ', function publisherControllerTests() {

        describe('When a publisher is added - ', function addPublishersCalled() {

            it('then the publisher will be sent to the API', function checkPublisherSentToApi() {
                var testPublisher = {
                    name: 'Fantasy Flight Games',
                    webSite: 'http://www.ffg.com',
                    code: 'FFG',
                    isActive: true,
                    description: 'Owned by Asmodee'
                };

                $httpBackend.expectPUT(baseLocation + '/publisherList/FFG', testPublisher).respond(201);

                addPublisherController.publisher = testPublisher;
                addPublisherController.addPublisher();

                $httpBackend.flush();
            });
        });

    });

    afterEach(function verifyFinal() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});
