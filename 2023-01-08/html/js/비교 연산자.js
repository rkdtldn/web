'use strict';
const num1 = 3;
const num2 = 5;
const str1 = "3";
const str2 = "abcde";
const str3 = "bcd";


let result = num1 > num2;
// 비교연산자의 결과값은 불리언형데이터를 결과값을 결정(true, false)
console.log("num1 > num2 : " + result) // false

result = str2 <= str3;
console.log("str2 <= str3 : " + result) // true

result = num1 == str1;
console.log("num1 == str1 : " + result) // true

result = num1 === str1;
console.log("num1 === str1 : " + result) // false

result = num1 != str1;
console.log("num1 == str1 : " + result) // flase

result = num1 !== str1;
console.log("num1 === str1 : " + result) // true




