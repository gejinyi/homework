var zhanghao = document.getElementsByClassName('phone')[0];
var zhanghaotext = zhanghao.value;
var submit =document.getElementsByClassName('submit')[0];
var foget = document.getElementsByClassName('attain')[0];
var password =document.getElementsByClassName('yanzheng')[0];
var passwordtext = password.value;
submit.onclick=function change(){
       xmlhttp = new XMLHttpRequest();
       xmlhttp.open('get',url1,true);  
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
