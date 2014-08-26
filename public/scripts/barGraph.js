$(document).ready(function () {
  function barGraph(parent) {
    
    while(parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    
    var _data = null,
    _money = false;

    var _mouseClick;

    var colours = ['#79bee9', '#109101', '#ebebeb'];

    var svg = d3.select(parent)
    .append('svg')
    .attr('width', '100%');

    function component () {
      var width = parent.offsetWidth;
      var height = parent.offsetHeight;
      svg.selectAll("*").remove();
      svg.attr('height', height);

      var total = 0;
      var previousH = 0;
      var previousHText = 0;

      _data.forEach(function(d, i) {
        total += d;
      });

      svg.selectAll("rect")
      .data(_data)
      .enter()
      .append("rect")
      .attr("height", function(d, i) {
        var h = (d * height) / total;
        return h;
      })
      .attr("y", function(d, i) {
        var h = ((_data[i - 1] || 0) * height) / total;
        if (i > 0) previousH += h;
        return previousH;
      })
      .attr("width", '100%')
      .attr('fill', function(d, i) {
        return colours[i];
      });

      svg.selectAll("text")
      .data(_data)
      .enter()
      .append("text")
      .attr("fill", "#fff")
      .attr("y", function(d, i) {
        var h = ((_data[i - 1] || 0) * height) / total;
        var currentHText = (d * height) / total;
        if (i > 0) previousHText += h;
        return previousHText + (currentHText / 2) + 4;
      })
      .attr('x', function(d, i) {
        return (width / 2) - 10;
      })
      .text(function(d) {
        if (_money)
          return d > 6? '$' + d : '';
        else
          return d > 6? + d : '';
      })
      .on("click", onMouseClick);

      function onMouseClick() {
        if (typeof _mouseClick == "function") {
          _mouseClick.call();
        }
      }
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

    component.money = function(money) {
      if (typeof money !== 'boolean') return;
      _money = money;
      return component;
    };

    component.onClick = function (_) {
      _mouseClick = _;
      return component;
    };

    return component;
  }

  function onClick1() {
    console.log('Clicked!');
  }

  function startGraphs () {
    var b1 = barGraph(document.getElementById('bar-1'))
    .data([20, 80])
    .money(true)
    .onClick(onClick1)
    .render();

    var b2 = barGraph(document.getElementById('bar-2'))
    .data([30, 70])
    .money(true)
    .render();

    var b3 = barGraph(document.getElementById('bar-3'))
    .data([40, 60])
    .money(true)
    .render();

    var b4 = barGraph(document.getElementById('bar-4'))
    .data([50, 50])
    .money(true)
    .render();

    var b5 = barGraph(document.getElementById('bar-5'))
    .data([60, 40])
    .money(true)
    .render();

    var b6 = barGraph(document.getElementById('bar-6'))
    .data([70, 30])
    .money(true)
    .render();

    var b7 = barGraph(document.getElementById('bar-7'))
    .data([80, 20])
    .money(true)
    .render();
  }

  startGraphs();

  window.onresize = function() {
    startGraphs();
  };
});