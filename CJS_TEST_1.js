var number = parseInt(Math.random() * (300 - 30) + 30);
var result = "";
if (number % 7 === 0 && number % 13 === 0) {
  result = "a-z";
} else if (number % 7 == 0) {
  result = "abc";
} else if (number % 13 == 0) {
  result = "xyz";
} else {
  result = "nothing";
}

console.log("Number: " + number);
console.log("Result: " + result);
