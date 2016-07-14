'use strict';

describe('Publisher Services Tests', function testPublisherServices() {
    var publisherListService;
    var $httpBackend;
    var $http;
    var $q;
    
    var getPublisherListService;
    
    var baseLocation = 'http://localhost:8100/api';
    
    var testData = { 'list': [
                        { name: 'Fantasy Flight Games', uri: '/publishers/FFG' },
                        { name: 'Wizards of the Coast', uri: '/publishers/WOTC' },
                        { name: 'Pinnacle Entertainment Group', uri: '/publishers/PEG' }
                    ]
    };
    
    beforeEach(function setUpForEachTest() {
        module('publisherServices');
        angular.mock.inject(function setUpMocks(_publisherListService_, _$httpBackend_, _$http_, _$q_) {
            publisherListService = _publisherListService_;
            $httpBackend = _$httpBackend_;
            $http = _$http_;
            $q = _$q_;            
        });
    });
    
    describe('GetPublisherList Service Tests', function testGetPublisherList() {

        it('Returns a list when successful', function testSuccessfulCall() {
            $httpBackend.expect('GET', baseLocation + '/publisherList').respond(testData);
            publisherListService.getPublisherList(baseLocation + '/publisherList')
                                .then(function success(response) {
                                    expect(response.length).toBe(3);
                                });
            $httpBackend.flush();
        });

        it('Returns an HTTP status code when unsuccessful', function testFailedCall() {
            $httpBackend.expect('GET', baseLocation + '/publisherList').respond(404);
            publisherListService.getPublisherList(baseLocation + '/publisherList')
                                .then(function success() {
                                }, function (err) {
                                    expect(err).toBe(404);
                                });
            $httpBackend.flush();
        });
    });
    
});