// 섹션4(모임) 탑다운메뉴의 주메뉴 (ul-li)의 색상지정


const sec4_dataA={
    menuColor : ["tomato","skyblue","lightgreen","#ccc","lightyellow"]
}

// 섹션4의 메뉴 5개에 주메뉴(p)에 색상넣기
$(function(){

    for(i=0; i<sec4_dataA.menuColor.length;i++){
    $(".sec4_menu"+i).css("background",sec4_dataA.menuColor[i])
                                        .css("opacity","0.8");
    }

})