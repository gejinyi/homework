//昵称
var name=document.getElementsByClassName('name')[0];
var baocun = document.getElementsByClassName('baocun')[0];
var cancle = document.getElementsByClassName('cancle')[0];
var name1=name.value;
cancle.onclick=function (){
    name.placeholder='修改昵称';
}
baocun.onclick=function (){
    name.placeholder=name1;
}
//居住地
var address =document.getElementsByClassName('address1')[0];
var baocun = document.getElementsByClassName('baocun')[2];
var cancle = document.getElementsByClassName('cancle')[2];
var address1 = address.value;
cancle.onclick=function (){
    address.placeholder='添加居住地';
}
baocun.onclick=function (){
    address.placeholder=address1;
}
//教育
var education1 =document.getElementsByClassName('education1')[0];
var baocun = document.getElementsByClassName('baocun')[3];
var cancle = document.getElementsByClassName('cancle')[3];
var education2 = education1.value;
cancle.onclick=function (){
    education1.placeholder='添加教育经历';
}
baocun.onclick=function (){
    education1.placeholder=education2;
}
//职业
var work1 =document.getElementsByClassName('work1')[0];
var baocun = document.getElementsByClassName('baocun')[4];
var cancle = document.getElementsByClassName('cancle')[4];
var work2 = work1.value;
cancle.onclick=function (){
    work1.placeholder='添加职业经历';
}
baocun.onclick=function (){
    work1.placeholder=work2;
}
