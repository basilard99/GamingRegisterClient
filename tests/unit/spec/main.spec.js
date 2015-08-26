'use strict';

describe("Testing the controller 'MainCtrl'", function() {

    var $rootScope, $scope, $controller;

    beforeEach(angular.mock.module('mainControllers'));

    beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;

        $controller('mainSelectionController', { '$scope': $scope });
    }));

    it('should do something', function() {
        expect($scope.publishers).toBeDefined();
    });

});
