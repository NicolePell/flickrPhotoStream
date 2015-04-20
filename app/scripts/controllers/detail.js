'use strict';

/**
 * @ngdoc function
 * @name flickrStreamAngularApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the flickrStreamAngularApp
 */
angular.module('flickrStreamAngularApp')
  .controller('DetailController', function ($scope, $http, $routeParams) {
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK";
    var parser = new DOMParser();

    $http.jsonp(url)
      .success(function(data) {
        $scope.photos = (data.items);
        $scope.whichPhoto = $scope.photos[$routeParams.photoID];
        var description = (parser.parseFromString($scope.whichPhoto.description, "text/html"));
        $scope.photoDescription = description.getElementsByTagName("p")[2].innerHTML;
      });

  });
