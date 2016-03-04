'use strict';

// NEEDS REVIEWED

describe('The main controllers will behave as follows -', function mainControllersTestSuite() {

    var mainController;
    var $controller;
    var $location;

    beforeEach(angular.mock.module('mainControllers'));

    beforeEach(angular.mock.inject(function setUpMocks(_$controller_, _$location_) {
        $controller = _$controller_;
        $location = _$location_;

        mainController = $controller('mainSelectionController');
    }));

    describe('When the main selection controller is created -', function mainSelectionControllerCreated() {

        it('then the listPublishers operation is defined', function checkList() {
            expect(mainController.listPublishers).toBeDefined();
        });

    });

    describe('When - ', function userActions() {

        it('the listPublishers operation is invoked then the location will be set to publishersList', function checkLocation() {
            mainController.listPublishers();
            expect($location.path()).toBe('/publishersList');
        });

    });

});
