'use strict';

describe('Controller: MainController', function () {

  // load the controller's module
  beforeEach(module('flickrStreamAngularApp'));

  var MainController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainController', {
      $scope: scope
    });
  }));

  it('attaches a list of photos to the scope', function () {
    expect(scope.photos.length).toBe(3);
  });
});
