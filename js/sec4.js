// 섹션4(모임) 탑다운메뉴의 주메뉴 (ul-li)의 색상지정
const sec4_dataA={
    menuColor : ["tomato","skyblue","lightgreen","#ccc","lightyellow"]
    
    ,sec4_smallA :[
        "img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg"]
    ,sec4_smallA_back4 :[
        "img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg"]    
    ,sec4_small_textA : [
        "그림설명1 <br> 숫자 : 10 <br>good",
        "그림설명2 <br> 숫자 : 10 <br>good",
        "그림설명3 <br> 숫자 : 10 <br>good",
        "그림설명4 <br> 숫자 : 10 <br>good",
        "그림설명5 <br> 숫자 : 10 <br>good",
        "그림설명6 <br> 숫자 : 10 <br>good"
    ]    ,
    sec4_headA:[ 
        "1 첫화면",
        "2 특산품",
        "3 기념음식",
        "3 맛집소개",
        "4 착한식당",
        "5 볼거리1",
        "6 볼거리2",
        "7 볼거리3",
        "8 재미거리1",
        "9 재미거리2",
        "10 참여마당1",
        "11 참여마당2",
        "12 참여마당3",
        "13 아카데미1",
        "14 아카데미2"
    ]
}



//섹션4 시작하자마자 모든 아티클 안보이그 at0만보이기
$(".sec4_at").hide();
$(".sec4_at0").show();
// 섹션안에 모든아티클속에 p(.sec_head번호)안에 선택서브
for(i=0; i<sec4_dataA.sec4_headA.length;i++){
    $(".sec4_head"+i).html(sec4_dataA.sec4_headA[i]);
}

//섹션4
// 섹션4의 메뉴 5개에 주메뉴(p)에 색상넣기
// ================================펑션 일반 문=================================
$(function(){

    for(i=0; i<sec4_dataA.menuColor.length;i++){
    $(".sec4_menu"+i).css("background",sec4_dataA.menuColor[i])
                                        .css("opacity","0.8");
    }


// 하단 그림,글자넣기
    for(i=0;i<sec4_dataA.sec4_smallA.length;i++){
    
        $(".sec4_sm_img"+i)
            .css("background","url(img/"+ sec4_dataA.sec4_smallA[i]+")")
            .css("backgroundSize","100% 100%")
        $(".sec_sm_img_text"+i).html(sec4_dataA.sec4_small_textA[i]);
    }
    // 요런 방법도 있고
        //     $(".sec4_small_img li").eq(i)
    //     .css("background","url(img/"+ sec4_dataA.sec4_smallA[i]+")")
    //     .css("backgroundSize","100% 100%");
    // 작은그림 오버하면 배경변환
    $(".sec4_small_img li div").hover(function(){
        no=$(this).attr("class").substring(11,12);
        console.log(no);
        $(".sec4_sm_img"+no)
        .css("background","url(img/"+ sec4_dataA.sec4_smallA_back4[i]+")")
        .css("backgroundSize","100% 100%")
    })
    
})
// =============================펑션 끝============================================


// ===========서브메뉴 클릭시 해당아티클이 나타나야함=================================
$(".sec4_subMenu").on("click",function(){
    no=$(this).attr("class").substring(12,14)
    console.log(no);
});








