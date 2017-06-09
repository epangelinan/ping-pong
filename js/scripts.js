$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    $(".indexValue").remove();
    var numberInput = parseInt($("input#numberInput").val());
    pingPong(numberInput);
    pingPongNumbers.forEach(function(pingPongNumber) {
      $(".results").append("<li class = 'indexValue'>" + pingPongNumber + "</li>");
    });

    for (index = 0; index < numberInput; index++){
      pingPongNumbers.pop();
    }
  });
});

var pingPongNumbers = [];

var pingPong = function(numberInput) {
  //alert(numberInput);
  for (index = 1; index <= numberInput; index++) {
    if (index % 15 === 0) {
      pingPongNumbers.push("ping-pong");
      //$(".results").append("<li>" + "ping-pong" + "</li>");
    } else if (index % 5 === 0) {
      pingPongNumbers.push("pong");
      //$(".results").append("<li>" + "pong" + "</li>");
    } else if (index % 3 === 0) {
      pingPongNumbers.push("ping");
      //$(".results").append("<li>" + "ping" + "</li>");
    }
    else {
      pingPongNumbers.push(index);
      //$(".results").append("<li>" + index + "</li>");
    }
  }
};
