(function () {
  'use strict';

  angular.module('myApp.directives')

  .directive('d3BarChart', ['d3', function(d3) {
    return {
      restrict: 'EA',

      scope: {
        data: "=",
        label: "@",
        onClick: "&"
      },

      link: function(scope, iElement, iAttrs) {

        var data = [50, 25, 25];

        var width = 30,
        height = iElement[0].offsetHeight;

        var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

        var y = d3.scale.linear().rangeRound([height, 0]);

        var color = d3.scale.ordinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

        var svg = d3.select(iElement[0])
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g");

        data.forEach(function(d, i) {
          var y0 = 0;
          d.ages = color.domain().map(function(name) { 
            return { name: name, y0: y0, y1: y0 += +d[name]}; 
          });
          console.log(d, i);
        });

        var rect = svg.selectAll(".rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", width)
        .attr("y", function(d) {
          // console.log(d);
        });
      }
    };
  }]);
}());