var com;
com = Math.floor(Math.random() * 3) +1;

switch(com){
    case 1: 
    com = "rock"
    break;


    case 2: 
    com = "scissor"
    break;


    case 3: 
    com = "paper"
    break;


    }

var me = prompt("단판 승부");

switch(me){
    case "가위": 
    if(com == "rock"){
        document.write("저런 상대가 주먹을 내버렸군요."+"<br>"+"당신은 졌습니다")
    } else if (com == "scissor"){
        document.write("어머나! 상대가 가위을 내버렸군요."+"<br>"+"이번판은 비겼습니다!")
    } else if(com == "paper"){
        document.write("우왕! 상대가 보를 내버렸군요."+"<br>"+"당신이 이겼습니다!")
    }
    break;


    case "주먹": 
    if(com == "paper"){
        document.write("저런 상대가 주먹을 내버렸군요."+"<br>"+"당신은 졌습니다")
    } else if (com == "rock"){
        document.write("어머나! 상대가 가위을 내버렸군요."+"<br>"+"이번판은 비겼습니다!")
    } else if(com == "scissor"){
        document.write("우왕! 상대가 보를 내버렸군요."+"<br>"+"당신이 이겼습니다!")
    }
    break;

    case "보": 
    if(com == "scissor"){
        document.write("저런 상대가 주먹을 내버렸군요."+"<br>"+"당신은 졌습니다")
    } else if (com == "paper"){
        document.write("어머나! 상대가 가위을 내버렸군요."+"<br>"+"이번판은 비겼습니다!")
    } else if(com == "rock"){
        document.write("우왕! 상대가 보를 내버렸군요."+"<br>"+"당신이 이겼습니다!")
    }

    break;
default :{
    alert("마 쉐끼 똑바로 안내나? 디지고 싶나?")
    break;
}



}
