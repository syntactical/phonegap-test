angular.module('phoneGapApp', ['ngRoute'])
    .config(function ($routeProvider){
        $routeProvider
            .when('/first', {
                templateUrl: 'views/first.html',
                controller: 'FirstCtrl'
            })
            .when('/second', {
                templateUrl: 'views/second.html',
                controller: 'SecondCtrl'
            })
            .when('/third', {
                templateUrl: 'views/third.html',
                controller: 'ThirdCtrl'
            })
            .otherwise({
                redirectTo: '/first'
            })
    });
