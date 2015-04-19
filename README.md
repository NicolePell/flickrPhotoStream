# flickr-stream-angular

A responsive web app which pulls through posts from Flickr tagged with the keyword "potato".

![Screenshot of the app]()

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Features of the website include:
- [ ] View a list of photos from the Flickr api feed
- [ ] View photo details
- [ ] Layout matches wireframes given
- [ ] Search photos using free-text search box

## Technologies
Testing:
- Karma for unit tests
- Protractor for end to end tests

Created with:
- AngularJS scaffolded using Yeoman
- HTML & SCSS
- Bootstrap

## File Structure
```
- app/scripts:
  - app.js: contains angular module and routing
- app/scripts/controllers:
  - controller.js: contains controllers used in this application
- app/index.html: contains the html layout including navbar
- app/views: contains the html for the main and photo details pages
- test:
  - e2e: contains end to end tests
  - unit: contains unit tests
```

## Things to improve
- [ ] Ability to click through to author profile on Flickr
- [ ] Improve display of description on photo details view
- [ ] Refactor api call into services
- [ ] Render photo details on main page when clicked
