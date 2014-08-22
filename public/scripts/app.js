(function () {
  'use strict';

  // create the angular app
  angular.module('myApp', ['myApp.controllers', 'myApp.services', 'myApp.directives', 'ngRoute'])

  .config(function ($routeProvider) {
    $routeProvider

    .when('/7DaysChart', {
      templateUrl: 'partials/barChart.html'
    })

    .when('/roomStatistics', {
      templateUrl: 'partials/roomStatistics.html'
    })

    .when('/lineChart', {
      templateUrl: 'partials/lineChart.html'
    })

    .otherwise({
      redirectTo: '/7DaysChart',
    });
  });

  // setup dependency injection
  angular.module('d3', []);
  angular.module('myApp.controllers', []);
  angular.module('myApp.services', []);
  angular.module('myApp.directives', []);
}());