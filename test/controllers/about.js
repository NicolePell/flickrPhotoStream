'use strict';

describe('Controller: DetailCtrl', function () {

  // load the controller's module
  beforeEach(module('flickrStreamAngularApp'));

  var DetailController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailController = $controller('DetailController', {
      $scope: scope
    });
  }));

  it('', function () {

  });
});
