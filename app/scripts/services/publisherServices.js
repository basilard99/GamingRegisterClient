'use strict';

var myModule = angular.module('publisherServices', []);

myModule.factory('publisherListService', function publisherListService($http, $q) {
    return {
        getPublisherList: function getPublisherList(apiLocation) {
            return $http.get(apiLocation).then(function getSucceeded(response) {
                if (typeof response.data === 'object') {
                    return $q.resolve(response.data.list);
                } else {
                    return $q.reject(response.status);
                }
            }, function getFailed(response) {
                return $q.reject(response.status);
            });
        }
    };
});
