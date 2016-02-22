'use strict';

describe('The publisher controllers will behave as follows -', function publisherControllersTestSuite() {

    var publisherController;
    var $controller;
    var $httpBackend;
    var $http;

    var testData = { 'list': [
                        'Fantasy Flight Games',
                        'Wizards of the Coast',
                        'Pinnacle Entertainment Group'
                    ]
    };

    beforeEach(angular.mock.module('publisherControllers'));

    beforeEach(angular.mock.inject(function setUpMocks(_$controller_, _$httpBackend_, _$http_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        $http = _$http_;

        publisherController = $controller('publisherListController', { '$http': $http });
    }));

    describe('When the publishers API call is successful -', function successfulPublisherAPICall() {

        it('then the publishers are added to the controller', function checkList() {
            $httpBackend.expect('GET', 'http://localhost:8000/api/publisherList').respond(testData);
            publisherController.loadPublisherList();
            $httpBackend.flush();

            expect(publisherController.publishers.length).toBe(3);
        });

        it('then the status should be \'Success \'', function checkStatusSuccess() {
            $httpBackend.expect('GET', 'http://localhost:8000/api/publisherList').respond(testData);
            publisherController.loadPublisherList();
            $httpBackend.flush();

            expect(publisherController.status).toBe('Success');
        });

    });

    describe('When the publishers API call is unsuccessful -', function failedPublisherAPICall() {

        it('then the publisher list will be empty ', function checkList() {
            $httpBackend.expect('GET', 'http://localhost:8000/api/publisherList').respond(404, '');
            publisherController.loadPublisherList();
            $httpBackend.flush();

            expect(publisherController.publishers.length).toBe(0);
        });

        it('then the status will be \'Unable to load publishers\'', function checkList() {
            $httpBackend.expect('GET', 'http://localhost:8000/api/publisherList').respond(404, '');
            publisherController.loadPublisherList();
            $httpBackend.flush();

            expect(publisherController.status).toBe('Unable to load publishers');
        });

    });

    afterEach(function verifyFinal() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});
