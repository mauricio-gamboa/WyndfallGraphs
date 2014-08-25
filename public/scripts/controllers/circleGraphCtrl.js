(function () {
  'use strict';

  angular.module('myApp.controllers')

  .controller('CircleGraphCtrl', ['$scope', 'Utils', function($scope, Utils) {

    var parent = document.getElementById('circle');

    var _data = null,
    _duration = 1000,
    _selection,
    _margin = { top:0, right:0, bottom:30, left:0 },
    __width = 300,
    __height = 300,
    _diameter = 150,
    _label = 'My Label',
    _fontSize = 10;

    var _mouseClick = function() {
      console.log('Mouse Clicked');
    };

    var _value = [78],
    _minValue = 0,
    _maxValue = 100;

    var  _currentArc = 0, _currentArc2 = 0, _currentValue = 0;

    var _arc = d3.svg.arc()
    .startAngle(0 * (Math.PI/180));

    var _arc2 = d3.svg.arc()
    .startAngle(0 * (Math.PI/180))
    .endAngle(0);

    _selection = d3.select(parent);
    _selection.datum([_value]);

    function component() {
      _selection.each(function (data) {
        console.log(data);
      });
    }

    function measure() {
      _width=_diameter - _margin.right - _margin.left - _margin.top - _margin.bottom;
      _height=_width;
      _fontSize=_width*0.2;
      _arc.outerRadius(_width/2);
      _arc.innerRadius(_width/2 * 0.85);
      _arc2.outerRadius(_width/2 * 0.85);
      _arc2.innerRadius(_width/2 * 0.85 - (_width/2 * 0.15));
    }

    component();
  }]);
}());