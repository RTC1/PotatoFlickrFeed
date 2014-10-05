## Potato Flickr Feed

 - Requires: Composer, NodeJS, NPM, Bower and Grunt
 - Single page app
 - Based upon Wireframes provided by Potato
 - Bootstrap 3, jQuery, Angular JS, Laravel
 - Responsive design
 - HTML5
 - LESS
 - Infinite scrolling
 - Same view displayed if the link is shared or the page is refreshed
 - 1 JS file and 1 css file which can be cached indefinitely, the cachebuster will modify the URL each time the file changes

# Build process

Run `grunt` or `grunt watch` to build CSS/JS.

# Deployment

1) Pull the project from git hub, and point the virtual host to the public directory.
2) Run `composer install` to install npm, composer and bower components and build the css/js.
3) Add rewrite rules for Apache/nginx. See: https://github.com/TheMonkeys/laravel-cachebuster.

# Development

`composer update` updates all packages and builds css/js.

`php artisan serve` fires up a PHP webserver. Routes have been added to support the cachebusting on the css/js files.

# Future development / Todo

Tags within each photo are click able but currently do nothing. This should populate a search box and filter items.

Controllers and Services are separated to allow for easy unit testing