'use strict';

/**
 * @ngdoc function
 * @name flickrStreamAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flickrStreamAngularApp
 */
angular.module('flickrStreamAngularApp')
  .controller('MainController', function ($scope) {
    $scope.photos = [
      'Photo 1',
      'Photo 2',
      'Photo 3'
    ];
  });
