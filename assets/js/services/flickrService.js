angular.module('flickrService', [])

    .factory('Photo', ['$http', function($http) {

        return {
            // get all the comments
            get : function() {
                return $http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK');
            }

        }

    }]);