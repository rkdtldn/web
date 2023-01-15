'use strict';
let input = prompt("아동, 청소년, 성인 중 선택하세요");

switch(input){
    case "아동": input += "은 입장료가 무료입니다."; alert(input); break;
    
    case "청소년": input += "은 입장료가 2,000원 입니다."; alert(input); break;
                
    case "성인": input += "은 입장료가 5,000원 입니다."; alert(input); break;

    default: alert("입력값이 유효하지 않습니다.");

}