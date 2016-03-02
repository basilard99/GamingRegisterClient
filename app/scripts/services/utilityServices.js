var utilityServices = angular.module('utilityServices', []);

utilityServices.service('locationService', function() {
    var port = 8100; // TODO: Fix this
    this.getBaseLocation = function() { return 'http://localhost:' + port; }
});
