'use strict';

describe('Testing the controller: MainCtrl', function mainCtrlTestSuite() {

    var $rootScope, $scope, $controller, $location;

    beforeEach(angular.mock.module('mainControllers'));

    beforeEach(angular.mock.inject(function setUpMocks(_$rootScope_, _$controller_, _$location_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $location = _$location_;

        $controller('mainSelectionController', { '$scope': $scope });
    }));

    it('listPublishers should be set', function checkList() {
        expect($scope.listPublishers).toBeDefined();
    });

    it('addPublisher should be set', function checkAddPublisher() {
        expect($scope.addPublisher).toBeDefined();
    });

    it('location should be set to addPublisher when invoked', function checkLocation() {
        $scope.addPublisher();
        expect($location.path()).toBe('/addPublisher');
    });

});
