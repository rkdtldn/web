'use strict';
const num1 = 10; //숫자형
const num2 = 5; //숫자형
const str1 = "Hello JavaScript"; //문자형
const str2 = "Hello World"; //문자형
const str3 = "100"; //문자형


//연산

console.log("num1 + num2 = " + (num1 + num2)); //15
console.log("num1 + str1 = " + (num1 + str1)); //문자연산(결합)
console.log("num1 + '' = " + (num1 + '')); //문자연산(결합)
console.log(typeof(num1)); //숫자형
console.log(typeof(num1 + " ")); //문자열형


console.log(str1 + " " + str2);
console.log(str1 + "\n" + str2);

// 변수값을 객체로 적용
console.log("str1 이라는 변수값: " + str1);
console.log(`str1 이라는 변수값: ${str1}`);

console.log(`num1 + num2 = ${num1 + num2}`); //15
console.log(`${num1} + ${num2} = ${num1 + num2}`); //15