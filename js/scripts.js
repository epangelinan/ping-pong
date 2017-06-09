$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#numberInput").val());
    var result = pingPong(numberInput);
    //$("#result").text(result);
  });
});

var pingPong = function(numberInput) {
  alert(numberInput);
  for (index = 1; index <= numberInput; index++) {
    if (index % 15 === 0) {
      $(".results").append("<li>" + "ping-pong" + "</li>");
    } else if (index % 5 === 0) {
      $(".results").append("<li>" + "pong" + "</li>");
    } else if (index % 3 === 0) {
      $(".results").append("<li>" + "ping" + "</li>");
    }
    else {
      $(".results").append("<li>" + index + "</li>");
    }
  }
};
