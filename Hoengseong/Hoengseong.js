let i;
const sec5A=[
    "img1.png","img2.png","img3.png","img4.png","img5.png"
];
const sec2A=[
    "img5.png","img2.png","img3.png","img4.png","img5.png"
];
const sec5_textA=[
    "동소개","인구소개","읍소개","종합운동장","시내전경"
]
let sec5Box, sec5Box_text;
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
})
















// ====================================================================================================
// let i;
// const sec5A=[
//     "img0.jfif","img1.jfif","img2.jfif","img3.jfif","img4.jfif","img5.jfif"
// ];
// const sec2A=[
//     "img0.jfif","img1.jfif","img2.jfif","img3.jfif","img4.jfif","img5.jfif"
// ];
// const sec5_textA=[
//     "동소개","인구소개","읍소개","종합운동장","시내전경"
// ];

// let sec5ABox, sec5Box_text,Big_img5;

// window.onload=function(){
//     sec5ABox=document.querySelector(".sec5Box").getElementsByTagName("li");
//     // sec5Box_text=document.querySelector(".sec5Box").getElementsByTagName("div");
//     // 메뉴및 텍스트 클래스명 초기화▼
//     sec5Box_text=document.querySelector(".sec5Box")
//     .getElementsByClassName("sec5Box_text");
//     for(i=0;i<sec5A.length;i++){
//         sec5ABox[i].style.background="url(img/"+sec5A[i]+")";
//         sec5ABox[i].style.backgroundSize="100% 100%";
//         // 이걸로 인한 연결이 본문 사진 과 연결되어있어 주석하지않으면 위에 사진글이
//         // 블락 난다 확인해보고 이해하자 ▼
//         sec5Box_text[i].innerHTML=sec5_textA[i];
//     }

//     //갤러리메뉴 사진 설명5개넣기▼
//     // 메뉴및 텍스트 클래스명 초기화▼
//     Big_img5=document.querySelector(".Big_img5").getElementsByTagName("li");
//     for(i=0;i<sec2A.length;i++){
//         Big_img5[i].style.background="url(img/"+sec2A[i]+")";
//         Big_img5[i].style.backgroundSize="100% 100%";
//     }

// }

// $(function(){
//     // 그림이 오른쪽으로 이동
//     $(".Big_prev").on("click", function(){
//     $(".Big_img5 li:last").prependTO(".Big_img5");
//     $(".Big_img5").css("left","-=1000px");
//     $(".Big_img5").animate({"left":"+=1000px"},500);
//         });
//     // 그림이 왼쪽으로 이동
//     $(".Big_next").on("click", function(){
//         $(".Big_img5").animate({"left":"-=1000px"},500,function(){
//             $(".Big_img5 li:first").appendTo(".Big_img5");
//             $(".Big_img5").css("left","+=1000px");
//         });
//     })
// })