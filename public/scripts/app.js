(function () {
  'use strict';

  // create the angular app
  angular.module('myApp', ['myApp.controllers', 'myApp.directives', 'ngRoute'])

  .config(function ($routeProvider) {
    $routeProvider

    .when('/barChart', {
      templateUrl: 'partials/barChart.html',
      controller: 'BarChartCtrl'
    })

    .when('/', {
      templateUrl: 'partials/demo.html',
      controller: 'DemoCtrl'
    })

    .otherwise({
      redirectTo: '/',
    });
  });

  // setup dependency injection
  angular.module('d3', []);
  angular.module('myApp.controllers', []);
  angular.module('myApp.directives', ['d3']);
}());