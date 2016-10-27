//business logic

function properRange(userInput) {
  if (userInput > 3999 || userInput < 1) {
    return false;
  }
} // properRange function

function converter(userInput) {

  var outputArray = [];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var singles = ["","I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var thousands = ["", "M", "MM", "MMM"];

  var inputArray = userInput.split("");

  var finalNumber = inputArray.pop();
  var secondToLastNumber = inputArray.pop();
  var thirdToLastNumber = inputArray.pop();
  var fourthToLastNumber = inputArray.pop();

  numbers.forEach(function(number) {
    if (number === fourthToLastNumber) {
      outputArray.push(thousands[number]);
    }
  });

  numbers.forEach(function(number) {
    if (number === thirdToLastNumber) {
      outputArray.push(hundreds[number]);
    }
  });

  numbers.forEach(function(number) {
    if (number === secondToLastNumber) {
      outputArray.push(tens[number]);
    }
  });

  numbers.forEach(function(number) {
    if (number === finalNumber) {
      outputArray.push(singles[number]);
    }
  });


  var finalOutput = outputArray.join("");
  return finalOutput;
}

// end of converter function





// user interface logic
$(document).ready(function(){
  $("#romanNumeralCalculator").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userNumber").val();
    var inRange = properRange(userInput);
    var result = converter(userInput);
    if (inRange === false) {
      $(".output").text("Please enter a number between 1 and 3,999");
    } else {
      $(".output").text(result);
    }

  }); //submit
}); // document
