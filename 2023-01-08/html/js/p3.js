'use strict';
const blood = prompt('혈액형을 입력하세요(A,B,O,AB)');


if(blood == "A" || "B" || "O" || "AB"){
    const type = prompt('RH- 또는 HR-를 선택하세요(-,+)');
    if(type == "+" || "-"){
        console.log('당신의 혈액형은 ' + blood + '형이며 타입은 RH' + type + "입니다.")
    }else{
        console.log("잘못된 입력값입니다");
    }
}else{
    console.log("잘못된 입력값입니다");
}
