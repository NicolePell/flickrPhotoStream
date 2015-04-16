'use strict';

describe('Controller: MainController', function () {

  beforeEach(module('flickrStreamAngularApp'));

  var MainController, scope, $httpBackend;

  beforeEach(inject(function (_$httpBackend_,$controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.whenJSONP('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK').
    respond([{title: 'Americans Today', author: 'nobody@flickr.com'},
            {title: 'Greek Fries', author: "anybody@flickr.com"}]);

    scope = $rootScope.$new();
    MainController = $controller('MainController', {
      $scope: scope
    });
  }));

  it('attaches a list of photos to the scope', function () {
    expect(scope.photos).toBeUndefined();
    $httpBackend.flush();
    expect(scope.photos).toEqual([{title: 'Americans Today', author: 'nobody@flickr.com'},
    {title: 'Greek Fries', author: "anybody@flickr.com"}]);
  });

});
