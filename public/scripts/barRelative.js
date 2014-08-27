$(document).ready(function () {
  function barRelative(parent) {

    var _data = null;
    
    function component () {
      var chart = c3.generate({
        bindto: parent,
        data: {
          columns: _data,
          type: 'bar'
        },
        color: { 
          pattern: ['#109101', '#79bee9', '#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a' ] 
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

    return component;
  }

  var theData = [['My Data 1', 30, 200, 100, 400, 150, 250]];
  var br1 = barRelative(document.getElementById('bar-relative'))
  .data(theData)
  .render();
});