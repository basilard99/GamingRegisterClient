'use strict';

describe('Testing the controller: Publisher', function publisherControllersTestSuite() {

    var $rootScope, $scope, $controller, $httpBackend, $http;
    var testData = { 'publisherList':
                    ['Fantasy Flight Games',
                     'Wizards of the Coast',
                     'Pinnacle Entertainment Group'] };

    beforeEach(angular.mock.module('publisherControllers'));

    beforeEach(angular.mock.inject(function setUpMocks(_$rootScope_, _$controller_, _$httpBackend_, _$http_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        $http = _$http_;

        $controller('addPublisherController', { '$scope': $scope, '$http': $http });
    }));

    it('publisher list should be defined on scope', function checkPublishers() {
        expect($scope.publishers).toBeDefined();
    });

    it('should add the publishers to the scope on successful call', function checkList() {

        $httpBackend.expect('GET', 'http://localhost:8000/api/publishers').respond(testData);
        $scope.loadPublishers();
        $httpBackend.flush();

        expect($scope.publishers.length).toBe(3);
    });

    it('status should be empty on successful call', function checkStatusSuccess() {

        $httpBackend.expect('GET', 'http://localhost:8000/api/publishers').respond(testData);
        $scope.loadPublishers();
        $httpBackend.flush();

        expect($scope.status).toBe('');
    });

    it('the publisher list should be empty on a failed call', function checkList() {

        $httpBackend.expect('GET', 'http://localhost:8000/api/publishers').respond(404, '');
        $scope.loadPublishers();
        $httpBackend.flush();

        expect($scope.publishers.length).toBe(0);
    });

    it('the status should contain an error message on a failed call', function checkList() {

        $httpBackend.expect('GET', 'http://localhost:8000/api/publishers').respond(404, '');
        $scope.loadPublishers();
        $httpBackend.flush();

        expect($scope.status.length).toBeGreaterThan(0);
    });

    afterEach(function verifyFinal() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});
