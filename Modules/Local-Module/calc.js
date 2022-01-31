var functions = require("./functions");
var a = 10,
    b = 7;
var result = functions.sum(a, b);
console.log(`Addition of ${a} and ${b} is ${result}`);
var result = functions.sub(a, b);
console.log(`Subtraction of ${a} and ${b} is ${result}`);
var result = functions.mul(a, b);
console.log("Multiplication of " + a + " and " + b + " is " + result);
