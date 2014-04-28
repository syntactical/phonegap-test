angular.module('phoneGapApp')
    .controller('ThirdCtrl', function($scope, $location){
        $scope.goToFirstPage = function() {
            $location.url('first');
        }
    });