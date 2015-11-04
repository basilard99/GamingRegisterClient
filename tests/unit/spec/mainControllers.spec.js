'use strict';

describe('Testing the main controllers: ', function mainCtrlTestSuite() {

    var mainController;
    var $controller;
    var $location;

    beforeEach(angular.mock.module('mainControllers'));

    beforeEach(angular.mock.inject(function setUpMocks(_$controller_, _$location_) {
        $controller = _$controller_;
        $location = _$location_;

        mainController = $controller('mainSelectionController');
    }));

    it('listPublishers should be defined', function checkList() {
        expect(mainController.listPublishers).toBeDefined();
    });

    it('location should be set to listPublisher when invoked', function checkLocation() {
        mainController.listPublishers();
        expect($location.path()).toBe('/publishersList');
    });

});
