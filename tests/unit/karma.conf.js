// Karma configuration
// Generated on Sun Aug 16 2015 04:35:34 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({
      basePath: './../../',
      frameworks: ['jasmine'],
      files: [
          'bower_components/angular/angular.js',
          'bower_components/angular-mocks/angular-mocks.js',
          'bower_components/angular-route/angular-route.js',
          'app/scripts/controllers/mainControllers.js',
          'tests/unit/spec/main.spec.js'
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