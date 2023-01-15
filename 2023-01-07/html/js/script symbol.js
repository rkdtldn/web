'use strict';
const sym1 = Symbol("apple");
const sym2 = Symbol("apple");

console.log(sym1 === sym2); //=== : 값과 타입이 모두 일치할 경우 true

const num1 = 10;
const num2 = 10;

console.log(num1 === num2); //=== : 값과 타입이 모두 일치할 경우 true

const sym3 = Symbol("banana");
const sym4 = sym3;
console.log(sym3 === sym4); //=== : 값과 타입이 모두 일치할 경우 true









