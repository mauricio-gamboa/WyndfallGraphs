(function () {
  'use strict';

  angular.module('myApp.directives')

  .directive('d3BarChart', ['d3', function(d3) {
    return {
      restrict: 'EA',

      scope: {
        data: "="
      },

      link: function(scope, iElement, iAttrs) {
        var colours = ['#79bee9', '#109101', '#ebebeb'];

        var height = iElement[0].offsetHeight;

        var svg = d3.select(iElement[0])
        .append('svg')
        .attr('width', '100%');

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
          var width = iElement[0].offsetWidth;
          svg.selectAll("*").remove();
          svg.attr('height', height);
          
          var total = 0;
          var previousH = 0;
          var previousHText = 0;

          data.forEach(function(d, i) {
            total += d;
          });

          svg.selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
          .attr("height", function(d, i) {
            var h = (d * height) / total;
            return h;
          })
          .attr("y", function(d, i) {
            var h = ((data[i - 1] || 0) * height) / total;
            if (i > 0) previousH += h;
            return previousH;
          })
          .attr("width", '100%')
          .attr('fill', function(d, i) {
            return colours[i];
          });

          svg.selectAll("text")
          .data(data)
          .enter()
          .append("text")
          .attr("fill", "#fff")
          .attr("y", function(d, i){
            var h = ((data[i - 1] || 0) * height) / total;
            var currentHText = (d * height) / total;
            if (i > 0) previousHText += h;
            return previousHText + (currentHText / 2) + 4;
          })
          .attr('x', function(d, i) {
            return (width / 2) - 10;
          })
          .text(function(d) {
            return d > 6? '$' + d : '';
          });
        };
      }
    };
  }]);
}());