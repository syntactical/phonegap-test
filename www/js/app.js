angular.module('phoneGapApp', ['ngRoute'])
    .config(function ($routeProvider){
        $routeProvider
            .when('/first', {
                templateUrl: 'views/first.html'
            })
            .when('/second', {
                templateUrl: 'views/second.html'
            })
            .when('/third', {
                templateUrl: 'views/third.html'
            })
            .otherwise({
                redirectTo: '/first'
            })
    });
