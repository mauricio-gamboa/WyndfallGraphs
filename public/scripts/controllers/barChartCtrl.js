(function () {
  'use strict';

  angular.module('myApp.controllers')

  .controller('BarChartCtrl', ['$scope', 'Utils', function($scope, Utils){

    $scope.title = "RevPAR";

    $scope.d3Data = [20, 30, 50];

    $scope.d3OnClick = function(){
      console.log('alo');
    };

    $scope.last7Days = Utils.getLastDays(7);

    function randombetween(min, max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    }

    function generate(max, thecount) {
      var r = [], currsum = 0;
      for(var i = 0; i < thecount - 1; i++) {
        r[i] = randombetween(1, max-(thecount-i-1)-currsum);
        currsum += r[i];
      }
      r[thecount-1] = max - currsum;
      return r;
    }

    angular.forEach($scope.last7Days, function (value, key) {
      value.data = generate(100, 2);
    });

    $scope.last7Days.reverse();
  }]);
}());