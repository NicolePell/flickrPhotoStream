'use strict';

describe('Controller: MainController', function () {

  beforeEach(module('flickrStreamAngularApp'));

  var MainController,
    scope;

  beforeEach(function() {

    });

  it('has a list of photos', function() {
    expect(photosList.get(1).isPresent()).toBe(true);
    expect(photosList.get(2).isPresent()).toBe(true);
  });

)};
