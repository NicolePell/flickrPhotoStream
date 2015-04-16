'use strict';
/**
 * @ngdoc function
 * @name flickrStreamAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flickrStreamAngularApp
 */
angular.module('flickrStreamAngularApp')
  .controller('MainController', function ($scope, $http) {

    // $scope.photos = [{
    //   "title": "Potatoes",
    //   "author": "nobody",
    // }];
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK";

    $http.jsonp(url)
      .success(function(data) {
        $scope.photos = (data.items);
        console.log(data.items);
      });

  });
