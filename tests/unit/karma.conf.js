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
          'app/scripts/services/*.js',
          'tests/unit/spec/*.spec.js'
      ],
      plugins: [
          'karma-jasmine',
          'karma-phantomjs-launcher',
          'karma-chrome-launcher'
      ],
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['PhantomJS'],
      captureTimeout: 60000,
      singleRun: true
  });
};
