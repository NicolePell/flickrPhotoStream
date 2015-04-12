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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
