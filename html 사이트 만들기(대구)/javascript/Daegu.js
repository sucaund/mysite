let i;
const sec5A=[
    "img1.png","img2.png","img3.png","img4.png","img5.png"
];
const sec2A=[
    "img5.png","img2.png","img3.png","img4.png","img5.png"
];
const sec5_textA=[
    "동소개","인구소개","읍소개","종합운동장","시내전경"
];
let sec5Box, sec5Box_text;





// 섹션4(모임) 탑다운메뉴의 주메뉴(ul-li)의 색상지정
const sec4_dataA={
    menuColor: ["tomato","skyblue","lightgreen","#ccc","lightyellow"],
    sec4_smallA : [
        "img5.png","img2.png","img3.png","img4.png","img5.png","img5.png"
    ],
}




// 점심메뉴 Sec3 변수 선언
const dataA={
    kind:["","한식","분식","중식","양식","기타"],

    kor:["1","김치찌게","순두부","비빔밥"],
    korImg:["","kim.jpeg","sun.jpeg","bibi.jpeg"],
    korprice:[0, "8,000", "8,500", "9,000"],

    bun:["2","라면","김밥","국수"],
    bunImg:["","men.jpeg","kimbab.jpeg","kuk.jpeg"],
    bunprice:[0, "3,000", "3,500", "7,000"],
    
    cha:["3","자장면","짬뽕","볶음밥"],
    chaImg:["","jajang.jpeg","jjam.jpeg","bbobb.jpeg"],
    chaprice:[0, 8000, 8500, 9000],
    
    eur:["4","돈가스","함박스택","생선가스"],
    eurImg:["","img7.jpeg","img14.jpeg","img10.jpeg"],
    eurprice:[0, 8500, 9500, 10000],
};
let no, count;




window.onload=function() {
    sec5Box=document.querySelector(".sec5Box").getElementsByTagName("li");
    // sec5Box_text=document.querySelector(".sec5Box").getElementsByTagName("div");
    sec5Box_text=document.querySelector(".sec5Box")
                        .getElementsByClassName("sec5Box_text");
    for(i=0; i<sec5A.length; i++) {
        sec5Box[i].style.background="url(img/"+sec5A[i]+")";
        sec5Box[i].style.backgroundSize="100% 100%";

        // 그림 밑에 설명 5개 넣기
        sec5Box_text[i].innerHTML = sec5_textA[i];
    }

    let Big_img5=document.querySelector(".Big_img5")
                        .getElementsByTagName("li");
    for(i=0; i<sec2A.length; i++) {
        Big_img5[i].style.background="url(img/"+sec2A[i]+")";
        Big_img5[i].style.backgroundSize="100% 100%";
    }

    // 섹션4(sec4)의 메뉴 5개에 주메뉴(p)에 색상 넣기
    for(i=0; i<sec4_dataA.menuColor.length; i++) {
        $(".sec4_menu"+i).css("background",sec4_dataA.menuColor[i])
                        .css("opacity","0.8");
    }
    for(i=0; i<sec4_dataA.sec4_smallA.length; i++) {
        // $(".sec4_small_img li:eq("+i+")")
        //     .css("background","url(img/" + sec4_dataA.sec4_smallA[i] + ")")
        //     .css("backgroundSize", "100% 100%");
        $(".sec4_small_img li").eq(i)
            .css("background","url(img/" + sec4_dataA.sec4_smallA[i] + ")")
            .css("backgroundSize", "100% 100%");
    }


}
$(function() {
    // 그림이 오른쪽으로 이동
    $(".Big_prev").on("click", function() {
        $(".Big_img5 li:last").prependTo(".Big_img5");
        $(".Big_img5").css("left", "-=1000px");
        $(".Big_img5").animate({"left": "+=1000px"}, 500);        
    })
    // 그림이 왼쪽으로 이동
    $(".Big_next").on("click", function() {
        $(".Big_img5").animate({"left":"-=1000px"},500, function() {
            $(".Big_img5> li:first").appendTo(".Big_img5");
            $(".Big_img5").css("left", "+=1000px");
        });
    })

    
    


    // 섹션6 효성 화면에서 그림 오버하면 색상 나오기
    // 제이쿼리에서 손가락 보이게 css 설정
    $(".sec6_box1_img").css("cursor", "pointer");



    // 그림 클릭하면 해당 그림 번호 가지고 함수 호출
    $(".sec6_box1_img1").on("click",function() {
        func_sec6(1);
    })
    $(".sec6_box1_img2").on("click",function() {
        func_sec6(2);
    })
    $(".sec6_box1_img3").on("click",function() {
        func_sec6(3);
    })
    $(".sec6_box1_img4").on("click",function() {
        func_sec6(4);
    })
    // -------- 찾아오는 함수
    function func_sec6(js) {
        $(".sec6_box1_child"+js).fadeIn();
    }

    // 그림 마우스 out 하면 해당 그림 다시 보이게 함수 호출
    $(".sec6_box1_child1").on("mouseout", function() {
        func_sec6_child(1);
    })
    $(".sec6_box1_child2").on("mouseout", function() {
        func_sec6_child(2);
    })
    $(".sec6_box1_child3").on("mouseout", function() {
        func_sec6_child(3);
    })
    $(".sec6_box1_child4").on("mouseout", function() {
        func_sec6_child(4);
    })
    // -------- 찾아오는 함수
    function func_sec6_child(js) {
        $(".sec6_box1_child"+js).fadeOut();
    }





/*
    // 1번째 그림
    $(".sec6_box1_img1").on("click",function() {
        $(".sec6_box1_child1").fadeIn();

    }) 
    // 파랑색 마우스 out 하면 사라지기
    $(".sec6_box1_child1").on("mouseout", function() {
        $(".sec6_box1_child1").fadeOut();
    })
    // 2번째 그림
    $(".sec6_box1_img2").on("click",function() {
        $(".sec6_box1_child2").fadeIn();
        
    })
    $(".sec6_box1_child2").on("mouseout", function() {
        $(".sec6_box1_child2").fadeOut();
    })
    // 3번째 그림
    $(".sec6_box1_img3").on("click",function() {
        $(".sec6_box1_child3").fadeIn();
        
    })
    $(".sec6_box1_child3").on("mouseout", function() {
        $(".sec6_box1_child3").fadeOut();
    })
    // 4번째 그림
    $(".sec6_box1_img4").on("click",function() {
        $(".sec6_box1_child4").fadeIn();
        
    })
    $(".sec6_box1_child4").on("mouseout", function() {
        $(".sec6_box1_child4").fadeOut();
    })
*/


    // 점심메뉴 Sec3 자바스크립트
    $(".start").on("click", function() {
        // count=Math.random()*100 + 1; // 1~99사이의 숫자 생성
        count=parseInt( Math.random()*3 + 1 ); // 1~3사이의 숫자 생성
            
        $(".wrap3 li").css("background","white").css("color","black");   // 모든 li 원래 배경
        $(".box"+count).css("background","black").css("color","white"); // 선택 배경

        // no=콤보박스(음식종류 번호),  count(종류-실제 음식 번호)
        if(no==1) {
            $(".pic").attr("src","img2/" + dataA.korImg[count]);
            $(".text").text( dataA.korprice[count] + " 원" );
        }
        else if(no==2) {
            $(".pic").attr("src","img2/" + dataA.bunImg[count]);
            $(".text").text( dataA.bunprice[count] + " 원" );
        }
        else if(no==3) {
            $(".pic").attr("src","img2/" + dataA.chaImg[count]);
            $(".text").text( dataA.chaprice[count] + " 원" );
        }
        else if(no==4) {
            $(".pic").attr("src","img2/" + dataA.eurImg[count]);
            $(".text").text( dataA.eurprice[count] + " 원" );
        }

    })
    // 다시하기 버튼 클릭하면 count와 콤보박스(no) 취소가 초기화
    $(".again").on("click", function() {
        count=0; no=0;
        $(".wrap3 li").text("")
                    .css("background","white")
                    .css("color","black");
    })

})



// 점심메뉴 Sec3에서 사용하는 function 
function func_ch(js) {
    no=js.selectedIndex;    
    $(".box0").text(dataA.kind[no] + " 선택");
    kind_func(no);    
}
function kind_func(js) {
    if(js==1) {
        for(i=1; i<dataA.kor.length; i++) {
            $(".box"+i).text(dataA.kor[i]);
        }
    }
    else if(js==2) {
        for(i=1; i<dataA.kor.length; i++) {
            $(".box"+i).text(dataA.bun[i]);
        }
    }
    else if(js==3) {
        for(i=1; i<dataA.kor.length; i++) {
            $(".box"+i).text(dataA.cha[i]);
        }
    }
    else if(js==4) {
        for(i=1; i<dataA.kor.length; i++) {
            $(".box"+i).text(dataA.eur[i]);
        }
    }

}