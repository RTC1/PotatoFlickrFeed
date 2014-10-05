## Potato Flickr Feed

Based upon Laravel & Angular JS. All precompiled files and third party code has been included for simplicity.

 - Single page app.
 - Based upon Potato Wireframes.
 - Bootstrap 3, jQuery, Angular JS, Laravel, Grunt, Bower
 - Responsive design.
 - HTML5
 - LESS
 - Infinite scrolling
 - Same view displayed if the link is shared or the page is refreshed.

# Future development / Todo

Tags within each photo are click able but currently do nothing. This should populate a search box and filter items.

Controllers and Services are separated to allow for easy unit testing

For SEO purposes

# Build process

Run `grunt` or `grunt watch` to build CSS/JS.

# Deployment

Run `composer install` - Installs composer and bower components, and builds the css/js.

Rewrite rules for Apache and nginx need to be added. (https://github.com/TheMonkeys/laravel-cachebuster)

# Development

`php artisan serve` - Fires up a PHP webserver. Routes have been added to support the cachebusting on css/js.