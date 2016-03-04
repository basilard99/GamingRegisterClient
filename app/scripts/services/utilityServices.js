'use strict';

var utilityServices = angular.module('utilityServices', []);

utilityServices.service('locationService', function locationService() {
    var port = 8100; // TODO: Fix this
    this.getBaseLocation = function getBaseLocation() {
        return 'http://localhost:' + port;
    };
});
