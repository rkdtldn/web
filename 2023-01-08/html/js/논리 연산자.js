'use strict';
const num1 = 10;
const num2 = 5;

let result1 = num1 == num2;
let result2 = num2 >= num2;

console.log("result1 && result2 : " + (result1 && result2)) // false
console.log("result1 || result2 : " + (result1 || result2)) // true
console.log("!result1 : " + (!result1)) // true
