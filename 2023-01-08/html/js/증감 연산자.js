'use strict';
let num1 = 10;

console.log("현재 num1  의 값 : " + num1) // 10출력
console.log("현재 ++num1의 값 : " + ++num1) // 11출력
console.log("현재 num1  의 값 : " + num1) // 11출력
console.log("현재 num1++의 값 : " + num1++) // 11출력
console.log("현재 num1  의 값 : " + num1) // 12출력

let num2 = 10;
console.log("------------------------------------------------------------------------------------------")

++num2;
console.log("현재 num2의 값 : " + num2);


num2++;
console.log("현재 num2의 값 : " + num2);

console.log("------------------------------------------------------------------------------------------")

let num3 = ++num2;
console.log("현재 num2의 값 : " + num2)
console.log("현재 num3의 값 : " + num3)

console.log("------------------------------------------------------------------------------------------")


let num4 = num2++; 
console.log("현재 num2의 값 : " + num2)
console.log("현재 num4의 값 : " + num4)






