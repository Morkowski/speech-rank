// Karma configuration
// Generated on Tue Feb 25 2020 16:44:35 GMT+0100 (GMT+01:00)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './node_modules/angular/angular.js',
      // './app/scripts/libs/angular.min.js',
      './app/scripts/libs/angular-ui-router.min.js',
      './app/scripts/libs/angular-animate.min.js',
      './app/scripts/libs/loading-bar.min.js',
      './app/scripts/libs/angular-toastr.min.js',
      './node_modules/angular-mocks/angular-mocks.js',
      // './app/scripts/services/ConferenceService.js',
      './app/scripts/controllers/ApplicationController.js',
      // './app/scripts/controllers/Conference.Controller.js',
      // './app/scripts/controllers/HomeController.js',
      // './app/scripts/directives/StarDirective.js',

      // './app/scripts/app.js',
      'app/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'ChromeHeadless',
      // 'Chrome'
    ],
    singleRun: false,
    concurrency: Infinity
  })
}
