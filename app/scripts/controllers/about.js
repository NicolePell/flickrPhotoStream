'use strict';

/**
 * @ngdoc function
 * @name flickrStreamAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flickrStreamAngularApp
 */
angular.module('flickrStreamAngularApp')
  .controller('AboutController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
