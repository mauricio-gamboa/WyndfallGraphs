(function () {
  'use strict';

  angular.module('myApp.services')

  .factory('Utils', function($rootScope, $http) {
    var Utils = {    
      getLastDays: function(numberOfDays) {
        numberOfDays -= 1;
        
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var monthsNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var dt = new Date();
        var lastDates = [];

        lastDates.push({
          day: dt.getDate(),
          dayString: days[dt.getDay()],
          month: monthsNumbers[dt.getMonth()],
          monthString: months[dt.getMonth()],
          monthAndDay: monthsNumbers[dt.getMonth()] + '/' + dt.getDate(),
          year: dt.getFullYear()
        });

        for (var i = 0; i < numberOfDays; i++) {
          dt.setDate(dt.getDate() - 1);
          lastDates.push({
            day: dt.getDate(),
            dayString: days[dt.getDay()],
            month: monthsNumbers[dt.getMonth()],
            monthString: months[dt.getMonth()],
            monthAndDay: monthsNumbers[dt.getMonth()] + '/' + dt.getDate(),
            year: dt.getFullYear()
          });
        };

        return lastDates;
      }
    };

    return Utils;
  });
}());