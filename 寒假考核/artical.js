
var article=document.getElementsByTagName('textarea')[0].value;
var submit=document.getElementsByClassName('submit')[0];
//保存
var url='';
submit.onclick=function change(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=statechange();
    xmlhttp = open('get',url,true);
    
}
function statechange(){
    if(xmlhttp.readyState==4 &&xmlhttp.status==200){
           json = JSON.parse(xmlhttp.responseText)
           article.innerText=article;

    }else{
        alert('请求错误'+responseText);
    }
    xmlhttp.send();
}
