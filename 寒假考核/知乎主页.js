//推荐，关注，热榜内容获取。
var rebang=document.getElementsByClassName('rebang')[0];
var tuijian=document.getElementsByClassName('tuijian')[0];
var guanzhu=document.getElementsByClassName('guanzhu')[0];
var tipcle1=document.getElementsByClassName('tipcle1')[0];
var url1='';
rebang.onclick=function change(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open('get',url1,true);  
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
var url2='';
tuijian.onclick=function change(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open('get',url2,true);  
    xmlhttp.onreadystate=function statechange(){
        if(xmlhttp.readyState==4 &&xmlhttp.status==200){
               json = JSON.parse(xmlhttp.responseText)
    
        } else{
            console.log('请求错误');
        }
    }
    xmlhttp.send(); 
}
var url3='';
guanzhu.onclick=function change(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open('get',url3,true);  
    xmlhttp.onreadystate=function statechange(){
        if(xmlhttp.readyState==4 &&xmlhttp.status==200){
               json = JSON.parse(xmlhttp.responseText)
               console.log(json);
    
        } else{
            console.log('请求错误');
        }
    }
    xmlhttp.send(); 
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
//由于没有后端同学的数据，在此用静态数据。
//静态数据展示
var p1 = document.getElementsByTagName('p')[0];
   var btn1 = document.getElementsByClassName('read')[0];
   var allContent1= p1.innerHTML;
   var partContentLength1 = allContent1.length * 0.3;
  p1.innerHTML = allContent1.substr(0, partContentLength1) + '......';
  btn1.onclick = function(){
    p1.innerHTML = allContent1;
    btn1.style.display = 'none'
 }
 var p2 = document.getElementsByTagName('p')[1];
   var btn2 = document.getElementsByClassName('read')[1];
   var allContent2= p2.innerHTML;
   var partContentLength2 = allContent2.length * 0.3;
  p2.innerHTML = allContent2.substr(0, partContentLength2) + '......';
  btn2.onclick = function(){
    p2.innerHTML = allContent2;
    btn2.style.display = 'none'
 }
 var p3 = document.getElementsByTagName('p')[2];
   var btn3 = document.getElementsByClassName('read')[2];
   var allContent3= p3.innerHTML;
   var partContentLength3 = allContent3.length * 0.3;
  p3.innerHTML = allContent3.substr(0, partContentLength3) + '......';
  btn3.onclick = function(){
    p3.innerHTML = allContent3;
    btn3.style.display = 'none'
 }
 var p4 = document.getElementsByTagName('p')[3];
   var btn4 = document.getElementsByClassName('read')[3];
   var allContent4= p4.innerHTML;
   var partContentLength4 = allContent4.length * 0.3;
  p4.innerHTML = allContent4.substr(0, partContentLength4) + '......';
  btn4.onclick = function(){
    p4.innerHTML = allContent4;
    btn4.style.display = 'none'
 }
 var p5 = document.getElementsByTagName('p')[4];
   var btn5 = document.getElementsByClassName('read')[4];
   var allContent5= p5.innerHTML;
   var partContentLength5 = allContent5.length * 0.3;
  p5.innerHTML = allContent5.substr(0, partContentLength5) + '......';
  btn5.onclick = function(){
    p5.innerHTML = allContent5;
    btn5.style.display = 'none'
 }
 var p6 = document.getElementsByTagName('p')[5];
   var btn6 = document.getElementsByClassName('read')[5];
   var allContent6= p6.innerHTML;
   var partContentLength6 = allContent6.length * 0.3;
  p6.innerHTML = allContent6.substr(0, partContentLength6) + '......';
  btn6.onclick = function(){
    p6.innerHTML = allContent6;
    btn6.style.display = 'none'
 }