(function () {
  'use strict';

  angular.module('myApp.controllers')

  .controller('BarChartCtrl', ['$scope', 'Utils', function($scope, Utils){



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

    function populateData(days) {
      angular.forEach(days, function (value, key) {
        value.data = generate(100, 2);
      });
    }

    $scope.showDayData = function(day){
      console.log(day);
    };

    $scope.last7Days = Utils.getLastDays(7);

    $scope.last7Days.reverse();

    populateData($scope.last7Days);

  }]);
}());