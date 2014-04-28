angular.module('phoneGapApp')
    .controller('FirstCtrl', function($scope, $location){
        $scope.goToSecondPage = function() {
            $location.url('second');
        }
    });