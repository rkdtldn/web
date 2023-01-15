'use strict';

const num1 = Number(prompt("첫번째 숫자를 입력하세요.")); // 100
const num2 = Number(prompt("두번째 숫자를 입력하세요.")); // 50

const num3 = num1 > num2 ? num1 : num2;
console.log("입력한 두 수에서 큰 수는 " + num3 + "입니다.");