angular.module('phoneGapApp')
    .controller('SecondCtrl', function($scope, $location){
        $scope.goToThirdPage = function() {
            $location.url('third');
        }
    });