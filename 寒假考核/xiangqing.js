var count =0;
var button = document.getElementsByClassName('colect')[0];
button.onclick = function () {
        count ++;
        if(count % 2 ==1) {
            this.innerHTML = '取消收藏';
        }else {
            this.innerHTML = '收藏';
        }
       
   
}
var button1 = document.getElementsByClassName('colect')[1];
button1.onclick = function () {
    
    count ++;
    if(count % 2 ==1) {
        this.innerHTML = '取消收藏';
    }else {
        this.innerHTML = '收藏';
    }
   
}
var button2 = document.getElementsByClassName('colect')[2];
button2.onclick = function () {
    
    count ++;
    if(count % 2 ==1) {
        this.innerHTML = '取消收藏';
    }else {
        this.innerHTML = '收藏';
    }
   
}
var childfour3=document.getElementsByClassName('childfour3')[0];
var childfour4=document.getElementsByClassName('childfour4')[0];
var childfour5=document.getElementsByClassName('childfour5')[0];
var agree=document.getElementsByClassName('agree')[0];
var agree2=document.getElementsByClassName('agree')[1];
var agree3=document.getElementsByClassName('agree')[2];
var disagree=document.getElementsByClassName('disagree')[0];
var disagree2=document.getElementsByClassName('disagree')[1]
var disagree3=document.getElementsByClassName('disagree')[2];//按钮
var agreeCount=document.getElementsByClassName('shu1')[0].innerText;//数
var agreeCount2=document.getElementsByClassName('shu1')[1].innerText;
var agreeCount3=document.getElementsByClassName('shu1')[2].innerText;
var disagreeCount=document.getElementsByClassName('shu2')[0].innerText;;
var disagreeCount2=document.getElementsByClassName('shu2')[1].innerText;;
var disagreeCount3=document.getElementsByClassName('shu2')[2].innerText;;
//赞
var clickcount=0;
var clickcount1=0;
var clickcount2=0;
var clickcount3=0;
var clickcount4=0;
var clickcount5=0;
var clickcount6=0;
agree.onclick=function(){
    clickcount++;
    if(clickcount % 2 ==1){
        agreeCount.innerText=agreeCount++;
        this.innerText =agreeCount+ '取消赞';
    }else{
        agreeCount.innerText=agreeCount--;
        this.innerText =agreeCount+'赞成';
    }
}
agree2.onclick=function(){
    clickcount1++;
    if(clickcount1 % 2 ==1){
        agreeCount2.innerText=agreeCount2++;
        this.innerText =agreeCount2+ '取消赞';
    }else{
        agreeCount2.innerText=agreeCount2--;
        this.innerText =agreeCount2+'赞成';
    }
}
agree3.onclick=function(){
    clickcount2++;
    if(clickcount2 % 2 ==1){
        agreeCount3.innerText=agreeCount3++;
        this.innerText =agreeCount3+ '取消赞';
    }else{
        agreeCount3.innerText=agreeCount3--;
        this.innerText =agreeCount3+'赞成';
    }
}
//反对
disagree.onclick=function(){
    clickcount3++;
    if(clickcount3 % 2 ==1){
        disagreeCount.innerText=disagreeCount++;
        this.innerText =disagreeCount+ '取消反对';
    }else{
        disagreeCount.innerText=disagreeCount--;
        this.innerText =disagreeCount+'反对';
    }
}
disagree2.onclick=function(){
    clickcount4++;
    if(clickcount4 % 2 ==1){
        disagreeCount2.innerText=disagreeCount2++;
        this.innerText =disagreeCount2+ '取消反对';
    }else{
        disagreeCount2.innerText=disagreeCount2--;
        this.innerText =disagreeCount2+'反对';
    }
}
disagree3.onclick=function(){
    clickcount5++;
    if(clickcount5 % 2 ==1){
        disagreeCount3.innerText=disagreeCount3++;
        this.innerText =disagreeCount3+ '取消反对';
    }else{
        disagreeCount3.innerText=disagreeCount3--;
        this.innerText =disagreeCount3+'反对';
    }
}
//搜索框
var research=document.getElementsByClassName('research')[0];
var submit=document.getElementsByClassName('submit')[0];
submit.onclick=function (){
    if(research.value==""){//为空则提问
        alert('请输入问题')
    }
    else{//有内容则搜索
        var url4='';
        function sousuo(){
            xmlhttp = new XMLHttpRequest();
            xmlhttp.open('get',url4,true);  
            xmlhttp.onreadystate=function statechange(){
                if(xmlhttp.readyState==4 &&xmlhttp.status==200){
                       json = JSON.parse(xmlhttp.responseText);
                       tipcle1.innerHTML=json;
                } else{
                    console.log('请求错误');
                }
            }
            xmlhttp.send(); 
        }
    }
}
//评论
var comment1=document.getElementsByClassName('comment')[0];
comment1.onclick=function(){
        clickcount6++;
        if(clickcount6 % 2 ==1){
            this.innerText ='取消评论';
        }else{
            this.innerText ='评论';
        }
}
var clickcount7=0;
var comment2=document.getElementsByClassName('comment')[1];
comment2.onclick=function(){
        clickcount7++;
        if(clickcount7 % 2 ==1){
            this.innerText ='取消评论';
        }else{
            this.innerText ='评论';
        }
}
var clickcount8=0;
var comment3=document.getElementsByClassName('comment')[2];
comment3.onclick=function(){
        clickcount8++;
        if(clickcount8 % 2 ==1){
            this.innerText ='取消评论';
        }else{
            this.innerText ='评论';
        }
}