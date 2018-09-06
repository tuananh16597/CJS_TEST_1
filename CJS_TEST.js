console.log("----------Test 1---------");
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
console.log("----------Test 3---------");
var array = prompt("Enter your array:").split(',');
var arrayResult = [];
for (var i = 0; i < array.length; i++) {
  if (array[i] % 2 == 1) {
    arrayResult.push(Math.pow(array[i], 2));
  }
}
console.log("Array: " + array);
console.log("Result: " + arrayResult);
