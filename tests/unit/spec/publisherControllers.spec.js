'use strict';

describe('Testing the Publisher controllers:', function publisherControllersTestSuite() {

    var publisherController;
    var $controller;
    var $httpBackend;
    var $http;
    var testData = { 'publisherList':
                    ['Fantasy Flight Games',
                     'Wizards of the Coast',
                     'Pinnacle Entertainment Group'] };

    beforeEach(angular.mock.module('publisherControllers'));

    beforeEach(angular.mock.inject(function setUpMocks(_$controller_, _$httpBackend_, _$http_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        $http = _$http_;

        publisherController = $controller('publisherListController', { '$http': $http });
    }));

    it('should add the publishers to the controller on successful API call', function checkList() {

        $httpBackend.expect('GET', 'http://localhost:8000/api/publishers').respond(testData);
        publisherController.loadPublisherList();
        $httpBackend.flush();

        expect(publisherController.publisherList.length).toBe(3);
    });

    it('status should be empty on successful API call', function checkStatusSuccess() {

        $httpBackend.expect('GET', 'http://localhost:8000/api/publishers').respond(testData);
        publisherController.loadPublisherList();
        $httpBackend.flush();

        expect(publisherController.status).toBe('');
    });

    it('the publisher list should be empty on a failed API call', function checkList() {

        $httpBackend.expect('GET', 'http://localhost:8000/api/publishers').respond(404, '');
        publisherController.loadPublisherList();
        $httpBackend.flush();

        expect(publisherController.publisherList.length).toBe(0);
    });

    it('the status should contain an error message on a failed API call', function checkList() {

        $httpBackend.expect('GET', 'http://localhost:8000/api/publishers').respond(404, '');
        publisherController.loadPublisherList();
        $httpBackend.flush();

        expect(publisherController.status.length).toBeGreaterThan(0);
    });

    afterEach(function verifyFinal() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});
