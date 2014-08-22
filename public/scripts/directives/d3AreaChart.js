(function () {
  'use strict';

  angular.module('myApp.directives')

  .directive('d3AreaChart', [function() {
    return {
      restrict: 'EA',

      scope: {
        data: "=",
        capacity: "="
      },

      link: function(scope, iElement, iAttrs) {
        var chart = c3.generate({
          bindto: iElement[0],
          data: {
            columns: scope.data,
            type: 'area'
          },
          point: { 
            show: false 
          },
          grid: {
            y: {
              show: true,
              lines: [{value: scope.capacity, class: 'capacity-line'}]
            }
          },
          axis: {
            x: {
              padding: {
                left: 0,
                right: 0 
              }
            }
          },
          color: { 
            pattern: ['#6495c7', '#a9c571', '#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a' ] 
          }
          // tooltip: {
          //   show: false
          // }
        });
      }
    };
  }]);
}());