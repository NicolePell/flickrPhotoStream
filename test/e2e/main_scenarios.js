'use strict';

describe('Flickr App', function () {

  beforeEach(function() {
   browser.get('index.html');
   photosList = element.all(by.repeater('photo in photos'));
 });

  it('has a list of photos', function() {
    expect(photosList.get(1).isPresent()).toBe(true);
    expect(photosList.get(2).isPresent()).toBe(true);
  });

});
