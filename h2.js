let no,count;

const dataA={
    kind:["","한식","분식","증식","양식","기타"],
    
    kor:["1","김치찌게","순두부","비빔밥"],
    korImg:["","kimchi1.jpg","img3.jpg","img4.jpg"],
    korprice:[0,"8,000","8,500","18,000"],
    
    bun:["2","떡볶이","순대","튀김"],
    bunImg:["","img0.jpg","img1.jpg","img5.jpg"],
    bunprice:[0,8000,8500,9500],
    
    cha:["3","자장면","짬뽕","볶음밥"],
    chaImg:["","img17.jpeg","img18.jpeg","img19.jpeg"],
    chaprice:[0,8000,3500,7000],
    
    eur:["4","돈까스","함박스테끼","생선가스"],
    eurImg:["","img0.jpg","img2.jpg","img20.jpg"],
    eurprice:[0,8000,5500,4000],

    shop:[
        "",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1329.8222169496646!2d126.9441246459347!3d37.55817163965985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c989aee23ef45%3A0x952694d6486aca05!2z7LKc7KeE67aE7Iud!5e0!3m2!1sko!2skr!4v1698738437558!5m2!1sko!2skr",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25302.91123251091!2d126.92460770327409!3d37.55827011675357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c99e150e9ad9b%3A0x34bba933e6fc3991!2z7Jyh7IiY64u5IOydtOuMgOyXreygkA!5e0!3m2!1sko!2skr!4v1698739814037!5m2!1sko!2skr",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25302.889342252132!2d126.92460769547247!3d37.558334579376485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e38c8be179%3A0x3319f633a1f5edb!2z7KSR7ZmU6rCA7KCV!5e0!3m2!1sko!2skr!4v1698739955832!5m2!1sko!2skr",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25302.867451982034!2d126.92460768767079!3d37.5583990419384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca34c5c49232b%3A0x75e73188c2212ecb!2z7J6Q6rCI7LmY!5e0!3m2!1sko!2skr!4v1698740189201!5m2!1sko!2skr"
        ],
    
    tip_1A :["","값에비해 양이 많다","맛이 있다."], //천진분식
    tip_2A :["","얼큰한맛","국물이 맛이 있다."], //육수당
    tip_3A :["","짬뽕","짜장"], //중화
    tip_4A :["","값에비해 양이 적다","맛이 제법 있다."], //자갈치
    }




function func_ch(js){
    //no는 콤보박스에서 선택된 번호 (0부터 시작)
    no=js.selectedIndex;
    $(".box0").text(dataA.kind[no]+" 선택");
    $(".ch")
    kind_func(no);   
}

function kind_func(js){
    if(js==1){
        for(i=1;i<dataA.kor.length;i++){
            $(".box"+i).text(dataA.kor[i]);
        }
        for(i=1;i<dataA.tip_1A.length;i++){
            $(".tip"+i).html(dataA.tip_1A[i]);
        }
    }

    else if(js==2){
        for(i=1;i<dataA.bun.length;i++){
            $(".box"+i).text(dataA.bun[i]);
        }
        for(i=1;i<dataA.tip_1A.length;i++){
            $(".tip"+i).html(dataA.tip_2A[i]);
        }
    }

    else if(js==3){
        for(i=1;i<dataA.cha.length;i++){
            $(".box"+i).text(dataA.cha[i]);
        }
        for(i=1;i<dataA.tip_1A.length;i++){
            $(".tip"+i).html(dataA.tip_3A[i]);
        }
    }

    else if(js==4){
        for(i=1;i<dataA.eur.length;i++){
            $(".box"+i).text(dataA.eur[i]);
        }
        for(i=1;i<dataA.tip_1A.length;i++){
            $(".tip"+i).html(dataA.tip_4A[i]);
        }
    }
    $(".wrap3 li").css("background","white").css("color","black");
    $(".box0").css("color","blue");
}


$(function(){
    $(".start").on("click", function(){
        count=parseInt(Math.random()*3 +1);
        // console.log("새로만든 숫자 : " + count)
        // no=콤보박스(음식종류), count(종류-실제 음식 번호)
    $(".wrap3 li"+count).css("background","white").css("color","black"); //모든 li는 원래 배경
    
    $(".box"+count).css("background","black").css("color","white"); //선택 배경
    
    if(no==1){
        $(".pic").attr("src","img/"+dataA.korImg[count]);
        $(".text").text(dataA.korprice[count]+"원");
        }
    else if(no==2){
        $(".pic").attr("src","img/"+dataA.bunImg[count]);
        $(".text").text(dataA.bunprice[count]+"원");
    }
    else if(no==3){
        $(".pic").attr("src","img/"+dataA.chaImg[count]);
        $(".text").text(dataA.chaprice[count]+"원");
        
    }
    else if(no==4){
        $(".pic").attr("src","img/"+dataA.eurImg[count]);
        $(".text").text(dataA.eurprice[count]+"원");
    }
    
    })
    //다시하기 버튼을 누르면 count와 콤보박스(no) 취소가 초기화
    $(".again").on("click",function(){
        count=0; no=0;
        $(".wrap3 li").text("")
                        .css("background","white")
                        .css("color","black");
    })
})
