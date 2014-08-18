(function () {
  'use strict';

  angular.module('myApp.controllers')
    .controller('BarChartCtrl', ['$scope', function($scope){
      
      $scope.title = "Bar Chart";
      
      $scope.d3Data = [
        {name: "Greg", score:98},
        {name: "Ari", score:96},
        {name: "Loser", score: 48}
      ];
      
      $scope.d3OnClick = function(item){
        console.log(item.name);
      };
    
    }]);
}());