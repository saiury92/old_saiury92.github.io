$(function(){
  Number.prototype.mod = function(n) { return ((this%n)+n)%n; };

  $("#computing").click( function(){
    $("#showMessage").html("Computing...");
    $("#showMessage").addClass("cssload-loader");
    $("#showMessage").removeClass("weekday");
    var day = parseInt($("#day").val());
    var month = parseInt($("#month").val());
    var year = parseInt($("#year").val());
    var weekdayNumber = zeller(day, month, year);
    var weekdays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    setTimeout(function(){
      $("#showMessage").removeClass("cssload-loader");
      $("#showMessage").addClass("weekday");
      $("#showMessage").html(weekdays[weekdayNumber]);
    }, 3000);
  });

  function _century(y,m) {
    if (_year(y,m) == 99) return Math.trunc((y-1) / 100);
    return Math.trunc(y / 100);
  }

  function _month(m) {
    if (m < 3) return m + 12;
    else return m;
  }

  function _year(y,m) {
    if (m < 3) return (y-1) % 100;
    else return y % 100;
  }

  function _zeller(day, month, year, century) {
    return (day + Math.trunc((13 * (month + 1)) / 5) + year + Math.trunc(year / 4)
      + Math.trunc(century / 4) - 2 * century).mod(7);
  }

  function zeller(d, m, y) {
    return Math.trunc(_zeller(d, _month(m), _year(y,m), _century(y,m)));
  }

  function _isLeap(year) {
    if ((year % 4) || ((year % 100 === 0) && (year % 400))) return 0;
    else return 1;
  }

  function _daysIn(month, year) {
    return (month === 2) ? (28 + isLeap(year)) : 31 - (month - 1) % 7 % 2;
  }

});