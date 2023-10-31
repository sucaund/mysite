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
    eurprice:[0,8000,5500,4000]
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
        $(".wrap3 li").text("").css("background","white").css("color","black");
    })
})

function func_ch(js){
    no=js.selectedIndex;
    $(".box0").text(dataA.kind[no]+" 선택");
    kind_func(no);   
}

function kind_func(js){
    if(js==1){
        for(i=1;i<dataA.kor.length;i++){
            $(".box"+i).text(dataA.kor[i]);
        }
    }

    if(js==2){
        for(i=1;i<dataA.bun.length;i++){
            $(".box"+i).text(dataA.bun[i]);
        }
    }

    if(js==3){
        for(i=1;i<dataA.cha.length;i++){
            $(".box"+i).text(dataA.cha[i]);
        }
    }

    if(js==4){
        for(i=1;i<dataA.eur.length;i++){
            $(".box"+i).text(dataA.eur[i]);
        }
    }
}