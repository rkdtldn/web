'use strict';
const age = Number(prompt('나이를 입력하세요.'));


if(age > 19){
    console.log("성인입니다.");
    console.log("성인인증을 받았습니다.");
}else if(age > 14){
    console.log("청소년입니다")
}else if(age > 6){
    console.log("어린이입니다.")
}else{
    console.log("유아입니다.")

}

