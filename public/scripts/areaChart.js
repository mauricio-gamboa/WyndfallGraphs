$(document).ready(function () {
  function areaChart(parent) {

    var _data = null;
    var _capacity = null;
    
    function component () {
      var chart = c3.generate({
        bindto: parent,
        data: {
          columns: _data,
          type: 'area'
        },
        point: { 
          show: false 
        },
        grid: {
          y: {
            show: true,
            lines: [{value: _capacity, class: 'capacity-line'}]
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

    component.capacity = function(capacity) {
      if (isNaN(capacity)) return;
      _capacity = capacity;
      return component;
    };

    return component;
  }

  var data1 =  ['Transient Rooms', 369, 376, 356, 334, 324, 303, 294, 277, 259, 243, 232, 224, 211, 199, 195, 179, 162, 151, 145, 132, 109, 106, 102, 99, 94, 93, 86, 81, 75, 70, 70, 66, 65, 59, 56, 56, 56, 54, 55, 52, 50, 49, 48, 49, 49, 49, 49, 48, 46, 46, 43, 42, 35, 27, 27, 25, 25, 26, 24, 23, 23, 23, 22, 22, 22, 20, 19, 18, 9, 8, 8, 5, 3, 3, 3];
  var data2 = ['Group Room Nights', 94, 94, 94, 97, 98, 102, 102, 102, 106, 106, 109, 109, 109, 109, 109, 115, 116, 116, 116, 115, 115, 115, 114, 112, 111, 111, 109, 104, 104, 111, 111, 105, 106, 103, 98, 97, 95, 90, 87, 89, 87, 85, 84, 84, 73, 79, 79, 77, 77, 77, 76, 74, 70, 68, 67, 66, 64, 64, 64, 64, 69, 69, 69, 69, 68, 68, 62, 62, 58, 30, 30, 9, 9, 5, 0];
  var theData = [data1, data2];

  var a1 = areaChart(document.getElementById('area-chart'))
  .capacity(122)
  .data(theData)
  .render();
});