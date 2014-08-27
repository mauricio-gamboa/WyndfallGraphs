(function () {
  'use strict';

  // create the angular app
  angular.module('myApp', ['myApp.controllers', 'myApp.services', 'myApp.directives', 'ngRoute'])

  .config(function ($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'partials/dashboard.html'
    })

    .when('/barChart7', {
      templateUrl: 'partials/barChart.html'
    })

    .when('/areaChart', {
      templateUrl: 'partials/areaChart.html'
    })

    .when('/lineChart', {
      templateUrl: 'partials/lineChart.html'
    })

    .when('/circleGraph', {
      templateUrl: 'partials/circleGraph.html'
    })

    .when('/sidewaysBar', {
      templateUrl: 'partials/sidewaysBar.html'
    })

    .otherwise({
      redirectTo: '/',
    });
  });

  // setup dependency injection
  angular.module('d3', []);
  angular.module('myApp.controllers', []);
  angular.module('myApp.services', []);
  angular.module('myApp.directives', []);
}());