# flickr-stream-angular

A responsive web app which pulls through posts from Flickr tagged with the keyword "potato".

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Features of the website include:
- [x] View a list of photos from the Flickr api feed
- [x] View photo details
- [x] Layout matches wireframes given
- [x] Search photos using free-text search box

## Technologies
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
- [ ] Get Karma and Protractor tests working!
- [ ] Ability to click through to author profile on Flickr
- [ ] Improve display of description on photo details view
- [ ] Refactor api call into services
- [ ] Render photo details on main page when clicked
