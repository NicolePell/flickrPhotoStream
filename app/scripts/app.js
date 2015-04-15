'use strict';

/**
 * @ngdoc overview
 * @name flickrStreamAngularApp
 * @description
 * # flickrStreamAngularApp
 *
 * Main module of the application.
 */
angular
  .module('flickrStreamAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngResource'
  ])
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/about', {
        templateUrl: 'views/detail.html',
        controller: 'DetailController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
