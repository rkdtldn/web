'use strict';
const name = String(prompt("이름을 입력하세요."));
const korean = Number(prompt("국어점수를 입력하세요."));
const english = Number(prompt("영어점수를 입력하세요."));
const mathe = Number(prompt("수학점수를 입력하세요."));

console.log(name + "님의 성적표");
console.log("국어점수 : " + korean + "점");
console.log("영어점수 : " + english + "점");
console.log("수학점수 : " + mathe + "점");
console.log("총점 : " + (korean+english+mathe));
console.log("평균 : " + ((korean+english+mathe)/3));

/*
if(((korean+english+mathe)/3) >= 90){
    console.log("A학점")
}else if(((korean+english+mathe)/3) >= 80){
    console.log("B학점")
}else if(((korean+english+mathe)/3) >= 70){
    console.log("C학점")
}else if(((korean+english+mathe)/3) >= 60){
    console.log("D학점")
}else{
    console.log("F학점")
}
*/

switch(parseInt(((korean+english+mathe)/3) / 10)){
    case 10 :
    case 9 : console.log("A학점"); break;
    case 8 : console.log("B학점"); break;
    case 7 : console.log("C학점"); break;
    case 6 : console.log("D학점"); break;
    default : console.log("F학점"); break;
}