'use strict';

module.exports = function configureKarma(config) {
  config.set({
      basePath: './../../',
      frameworks: ['jasmine'],
      files: [
          'bower_components/angular/angular.js',
          'bower_components/angular-mocks/angular-mocks.js',
          'bower_components/angular-route/angular-route.js',
          'app/scripts/controllers/*.js',
          'tests/unit/spec/*.spec.js'
      ],
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      captureTimeout: 60000,
      singleRun: false
  });
};
