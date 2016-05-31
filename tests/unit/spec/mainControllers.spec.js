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

        it('then the addPublisher operation is defined', function checkAddPublisher() {
            expect(mainController.addPublisher).toBeDefined();
        });

        it('then the addBook operation is defined', function checkAddBook() {
            expect(mainController.addBook).toBeDefined();
        });

    });

    describe('When - ', function userActions() {

        it('the listPublishers operation is invoked then the location will be set to publishersList', function checkLocation() {
            mainController.listPublishers();
            expect($location.path()).toBe('/publishersList');
        });

        it('the addPublisher operation is invoked then the location will be set to addPublisher', function checkLocation() {
            mainController.addPublisher();
            expect($location.path()).toBe('/addPublisher');
        });

        it('the addBook operation is invoked then the location will be set to addBook', function checkLocation() {
            mainController.addBook();
            expect($location.path()).toBe('/addBook');
        });

    });

});
