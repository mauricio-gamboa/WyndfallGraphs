$(document).ready(function () {
  function areaChart(parent) {

    var _data = null;
    var _lineY = null;
    var _lineX = null;
    _categories = null;
    var maxValue = 0;
    var maxValueIndex = 0;
    
    function component () {

      for (var i = 0; i < _data.length; i++) {
        for (var j = 0; j < _data[i].length; j++) {
          if (!isNaN(_data[i][j])) {
            if (_data[i][j] > maxValue) {
              maxValue = _data[i][j];
              maxValueIndex = i;
            }
          }
        }
      }

      var theLabel = _data[maxValueIndex][0];
      this.theAxe = {};
      var someObject = "theAxe";
      this[someObject][theLabel] = "y2";

      var chart = c3.generate({
        bindto: parent,
        data: {
          columns: _data,
          type: 'area',
          axes: this.theAxe
        },
        point: { 
          show: false 
        },
        grid: {
          y: {
            show: true,
            lines: [{value: _lineY, class: 'capacity-line'}]
          },
          x: {
            lines: [{value: _lineX, class: 'capacity-line'}]
          }
        },
        axis: {
          y: {
            show: false
          },
          y2: {
            show: true
          },
          x: {
            type: 'category',
            categories: _categories,
            tick: {
              culling: {
                max: _categories.length / 2
              }
            }
          }
        },
        color: { 
          pattern: ['#6495c7', '#a9c571', '#ff7f0e', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a' ] 
        }
      });
    }

    component.render = function() {
      component();
      return component;
    };

    component.data = function(data) {
      if (!data.length) return;
      _data = data;
      return component;
    };

    component.categories = function(categories) {
      if (!categories.length) return;
      _categories = categories;
      return component;
    };

    component.lineY = function(lineY) {
      if (isNaN(lineY)) return;
      _lineY = lineY;
      return component;
    };

    component.lineX = function(lineX) {
      if (isNaN(lineX)) return;
      _lineX = lineX;
      return component;
    };

    return component;
  }

  // These are the series (areas) to be shown in the chart, the arrays must have the same length
  // Important: The label must be the first item in the series arrays
  var data1 = ['Label 1', 3, 3, 3, 5, 8, 8, 9, 18, 19, 20, 22, 22, 22, 23, 23, 23, 24, 26, 25, 25, 27, 27, 35, 42, 43, 46, 46, 48, 49, 49, 49, 49, 48, 49, 50, 52, 55, 54, 56, 56, 56, 59, 65, 66, 70, 70, 75, 81, 86, 93, 94, 99, 102, 106, 109, 132, 145, 151, 162, 179, 195, 199, 211, 224, 232, 243, 259, 277, 294, 303, 324, 334, 356, 376, 369];
  var data2 = ['Label 2', 369, 376, 356, 334, 324, 303, 294, 277, 259, 243, 232, 224, 211, 199, 195, 179, 162, 151, 145, 132, 109, 106, 102, 99, 94, 93, 86, 81, 75, 70, 70, 66, 65, 59, 56, 56, 56, 54, 55, 52, 50, 49, 48, 49, 49, 49, 49, 48, 46, 46, 43, 42, 35, 27, 27, 25, 25, 26, 24, 23, 23, 23, 22, 22, 22, 20, 19, 18, 9, 8, 8, 5, 3, 3, 3];
  
  // Numbers or strings to show in the x axis, the length of this array must be series.length - 1,
  // This arrays does not have the "Label" value and that's why its length is series.length - 1
  var theCategories =  [116, 109, 102, 95, 88, 81, 74, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  
  // Add all the series to this array
  var theData = [data1, data2];

  var a1 = areaChart(document.getElementById('area-chart'))
  .data(theData)
  .categories(theCategories)
  .lineX(10) // the numbers is the position in the series array and not the value itself
  .render();
});