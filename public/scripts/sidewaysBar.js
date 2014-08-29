$(document).ready(function () {
  function sideWaysBar($parent) {

    var _percentage = 0;
    var _mouseClick;
    
    function component () {
      $parent.append('<div class="inner-element"></div>');
      var $inner = $parent.find('.inner-element');
      $inner.css('width', _percentage + '%');

      $parent.on('click', onMouseClick);

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

    component.percentage = function(percentage) {
      if (isNaN(percentage) || percentage < 0 || percentage > 100) 
        _percentage = 0;
      else 
        _percentage = percentage;
      return component;
    };

    component.onClick = function (_) {
      _mouseClick = _;
      return component;
    };

    return component;
  }

  var onClick1 = function() {
    console.log('Clicked 1');
  };

  var onClick2 = function() {
    console.log('Clicked 2');
  };

  var onClick3 = function() {
    console.log('Clicked 3');
  };

  var side1 = sideWaysBar($('#sideways-bar-1'))
  .percentage(40)
  .onClick(onClick1)
  .render();

  var side2 = sideWaysBar($('#sideways-bar-2'))
  .percentage(35)
  .onClick(onClick2)
  .render();

  var side3 = sideWaysBar($('#sideways-bar-3'))
  .percentage(41)
  .onClick(onClick3)
  .render();
});