angular.module('phoneGapApp')
    .controller('MainCtrl', function($scope, $location) {
        $scope.go = function(path) {
            $location.url(path);
        };

    });