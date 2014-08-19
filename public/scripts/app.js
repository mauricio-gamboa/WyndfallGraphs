(function () {
  'use strict';

  // create the angular app
  angular.module('myApp', ['myApp.controllers', 'myApp.services', 'myApp.directives', 'ngRoute'])

  .config(function ($routeProvider) {
    $routeProvider

    .when('/barChart', {
      templateUrl: 'partials/barChart.html'
    })

    .when('/demo', {
      templateUrl: 'partials/demo.html',
      controller: 'DemoCtrl'
    })

    .otherwise({
      redirectTo: '/barChart',
    });
  });

  // setup dependency injection
  angular.module('d3', []);
  angular.module('myApp.controllers', []);
  angular.module('myApp.services', []);
  angular.module('myApp.directives', ['d3']);
}());