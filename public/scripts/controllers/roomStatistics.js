(function () {
  'use strict';

  angular.module('myApp.controllers')

  .controller('RoomStatisticsCtrl', ['$scope', 'Utils', function($scope, Utils){
    $scope.day = Utils.getLastDays(1);
    $scope.day[0].statistics = [{name: 'Room Nights', data: [16, 54]}, {name: 'Revenue', data: [2670, 7590]}, {name: 'revPAR', data: [21, 83]}];
    $scope.today = $scope.day[0];
  }]);
}());