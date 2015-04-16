'use strict';

describe('Controller: MainController', function () {

  beforeEach(module('flickrStreamAngularApp'));

  var MainController,
    scope, $httpBackend;

  beforeEach(inject(function (_$httpBackend_,$controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectJSONP('https://api.flickr.com/services/feeds/phots_public.gne?tags=potato&tagmode=all&form=json&jsoncallback=JSON_CALLBACK').
      respond([{title: 'Americans Today', author: "nobody@flickr.com"}]);

    scope = $rootScope.$new();
    MainController = $controller('MainController', {
      $scope: scope
    });
  }));

  it('fetches photos from Flickr and creates a model', function () {
    expect(scope.photos).toBeUndefined();
    $httpBackend.flush();
    expect(scope.photos).toEqual([(title: "Americans Today", author: "nobody@flickr.com")]);
  });
});
