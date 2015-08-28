'use strict';

describe("Testing the controller 'MainCtrl'", function() {

    var $rootScope, $scope, $controller, $location;

    beforeEach(angular.mock.module('mainControllers'));

    beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_, _$location_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $location = _$location_;

        $controller('mainSelectionController', { '$scope': $scope });
    }));

    it('listPublishers should be set', function() {
        expect($scope.listPublishers).toBeDefined();
    });

    it('addPublisher should be set', function() {
        expect($scope.addPublisher).toBeDefined();
    });

    it('location should be set to addPublisher when invoked', function() {
        $scope.addPublisher();
        expect($location.path()).toBe('/addPublisher');
    })

});
