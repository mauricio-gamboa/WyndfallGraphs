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
        var colours = ['#ebebeb', '#7fbfe6', '#67b369'];

        var width = iElement[0].offsetWidth,
        height = iElement[0].offsetHeight;

        var svg = d3.select(iElement[0])
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append("g");

        window.onresize = function() {
          return scope.$apply();
        };

        scope.$watch(function(){
          return angular.element(window)[0].innerWidth;
        }, function(){
          return scope.render(scope.data);
        });

        scope.$watch('data', function(newVals, oldVals) {
          return scope.render(newVals);
        }, true);

        scope.render = function(data) {
          svg.selectAll("*").remove();
          
          var y = 0;
          var total = 0;

          data.forEach(function(d, i) {
            total += d;
          });

          data.forEach(function(d, i) {
            var h = (d * height) / total;
            svg.append("rect")
            .attr("width", width)
            .attr("y", y)
            .attr("height", h)
            .attr('fill', colours[i])
            .on("click", function(){
              return scope.onClick();
            });
            y += h;
          });
        };
      }
    };
  }]);
}());