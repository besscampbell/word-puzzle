$(document).ready(function(event) {
  $("form#puzzle").submit(function(event) {
    event.preventDefault();
    let userInput = $("input#submission").val();
    let userString = userInput.split("");
alert(userString);
  });
});