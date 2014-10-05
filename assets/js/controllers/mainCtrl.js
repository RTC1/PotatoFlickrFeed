angular.module('mainCtrl', [])

    // An array is passed here as the minification breaks the AngularJS dependency injector due to renaming of the vars
    // inject the Flickr service into our controller
    .controller('mainController',
    [
        '$scope',
        '$http',
        'Photo',
        'ordinalDateFilter',
        '$routeParams',
        function(
            $scope,
            $http,
            Photo,
            ordinalDateFilter,
            $routeParams)
        {

            // loading variable to show the spinning loading icon
            $scope.loading = true;

            var selectImage = function(imageId)
            {
                $.each($scope.photos, function()
                {
                    if (this.id == imageId) {
                        $scope.photo = this;
                        return false;
                    }
                });
            }

            // First page load
            if ($scope.photos === undefined) {

                // Grab all the photos from our flickrService for the initial load
                Photo.get()
                    .success(function (data) {

                        $scope.photos           = data.items;
                        $scope.scrollPhotos     = [];

                        // The array keys differ each time the page is reloaded, therefore we need a unique photo ID.
                        $.each($scope.photos, function () {
                            // grab photo id from url
                            var photo_id_regex      = /\/[\d]+\/$/;
                            var photo_author_regex  = /\(.*\)$/;

                            this.id             = this.link.match(photo_id_regex)[0].replace(/\//g, '');
                            this.author_name    = this.author.match(photo_author_regex)[0].replace(/[\(|\)]/g, '');
                            this.tags           = this.tags.split(' ');
                            this.description    = $(this.description).find("img").remove().end().html();
                        });

                        $scope.loadMore = function() {

                            for(var i = 1; i <= 3; i++) {
                                var next = $scope.photos[$scope.scrollPhotos.length];

                                if (next === undefined) {
                                    return false;
                                }

                                $scope.scrollPhotos.push(next);
                            }
                        };

                        // Fire it off once so we get some images ready
                        $scope.loadMore();

                        if ($routeParams.id) {
                            selectImage($routeParams.id);
                        }

                        $scope.loading = false;

                    });
            } else {

                if ($routeParams.id) {
                    selectImage($routeParams.id);
                }

                $scope.loading = false;
            }

        }
    ]);