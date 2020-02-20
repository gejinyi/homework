var dongtai=document.getElementsByClassName('dongtai')[0].innerText;
var huida=document.getElementsByClassName('huida')[0].innerText;
var artical=document.getElementsByClassName('artical')[0].innerText;
var colect=document.getElementsByClassName('colect')[0].innerText;
var Colect=document.getElementsByClassName('colect')[0];
var Dongtai=document.getElementsByClassName('dongtai')[0];
var Huida=document.getElementsByClassName('huida')[0];
var Question=document.getElementsByClassName('question')[0];
var question=document.getElementsByClassName('question')[0].innerText;
var Artical=document.getElementsByClassName('artical')[0]
//文字内容改变
var title=document.getElementsByTagName('h4')[0];
function change(text){
    title.innerText=('我的'+text);
}
Dongtai.onclick=function (){
    change(dongtai);
}
Huida.onclick=function (){
    change(huida);
}
Question.onclick=function(){
    change(question);
}
Artical.onclick=function(){
    change(artical);
}
Colect.onclick=function(){
    change(colect);}
//上传头像实在写不出来
