'use strict';
let menu = prompt("메뉴를 선택하세요.(피자 : p, 스파게티 : s, 리조또 : r, 음료 : d)");

switch(menu){
    case "p": 
    case "P": document.write("피자를 주문하셨습니다."); break; 
    case "s": 
    case "S": document.write("스파게티를 주문하셨습니다."); break;
    case "r": 
    case "R": document.write("리조또를 주문하셨습니다."); break;
    case "d": 
    case "D": document.write("음료를 주문하셨습니다."); break;

    default : alert("주문하신 메뉴가 없습니다."); break;
}