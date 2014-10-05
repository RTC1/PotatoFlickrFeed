
var flickrApp = angular.module('flickrApp', ['mainCtrl', 'flickrService', 'angularUtils.filters.ordinalDate', 'ngRoute', 'ngSanitize', 'infinite-scroll']);

flickrApp.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/', {
        templateUrl: 'ng-views/photo-list.html',
        controller: 'mainController'
    });

    $routeProvider.when('/photo/:id', {
        templateUrl: 'ng-views/photo.html',
        controller: 'mainController'
    });
}]);
