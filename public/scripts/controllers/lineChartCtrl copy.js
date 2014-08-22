(function () {
  'use strict';

  angular.module('myApp.controllers')

  .controller('LineChartController', ['$scope', 'Utils', function($scope, Utils) {

    var data1 = [3, 3, 3, 5, 8, 8, 9, 18, 19, 20, 22, 22, 22, 23, 23, 23, 24, 26, 25, 25, 27, 27, 35, 42, 43, 46, 46, 48, 49, 49, 49, 49, 48, 49, 50, 52, 55, 54, 56, 56, 56, 59, 65, 66, 70, 70, 75, 81, 86, 93, 94, 99, 102, 106, 109, 132, 145, 151, 162, 179, 195, 199, 211, 224, 232, 243, 259, 277, 294, 303, 324, 334, 356, 376, 369];
    var data2 = [0, 5, 9, 9, 30, 30, 58, 62, 62, 68, 68, 69, 69, 69, 69, 64, 64, 64, 64, 66, 67, 68, 70, 74, 76, 77, 77, 77, 79, 79, 73, 84, 84, 85, 87, 89, 87, 90, 95, 97, 98, 103, 106, 105, 111, 111, 104, 104, 109, 111, 111, 112, 114, 115, 115, 115, 116, 116, 116, 115, 109, 109, 109, 109, 109, 106, 106, 102, 102, 102, 98, 97, 94, 94, 94];
    var categories = [116, 109, 102, 95, 88, 81, 74, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    console.log(data1.length, data2.length, categories.length);

    var chart = c3.generate({
      bindto: '#chart-wrapper',
      data: {
        columns: [data1, data2],
        type: 'area'
      },
      point: { 
        show: false 
      },
      grid: {
        y: {
          show: true,
          lines: [{value: 300, class: 'capacity-line'}]
        }
      },
      axis: {
        x: {
          padding: {
            left: 0,
            right: 0 
          },
          type: 'category',
          categories: categories,
          tick: {
            culling: {
              max: data1.length / 2
            }
          }
        }
      },
      color: { pattern: ['#6495c7', '#a9c571', '#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a' ] }
    });

  }]);
}());