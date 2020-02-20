var phone = document.getElementById('phone');
var phonetext = phone.value;
var submit =document.getElementsByClassName('submit')[0];
var attain = document.getElementsByClassName('attain')[0];
var yanzheng =document.getElementsByClassName('yanzheng')[0];
var yanzhengtext = yanzheng.value;

//验证码
var counts = 60;
 
function settime(val) {
 if(counts == 0) {
  val.removeAttribute("disabled");
  val.value = "获取验证码";
  counts = 60;
  return false;
 } else {
  val.setAttribute("disabled", true);
  val.value = "重新发送（" + counts + "）";
  counts--;
 }
 setTimeout(function() {
  settime(val);
 }, 1000);
}
//ajax
(function(){
 //获取验证码
 $("#attain").click(function() {
  var userinfo = {
   "UserPhoneNum": '86//' + $("input[name='phone']").val()
  }
  //接口
  //验证码
  $.ajax({
   url: "",
   data: userinfo,
   type: "get",
   success: function(data) {
    if(JSON.parse(data).state === 404 || JSON.parse(data).state === 202 || userinfo.UserPhoneNum === '86//') {
     alert("验证码发送失败")
    } else {
     alert("验证码发送成功")
    }
   },
   error: function() {
    alert("发送失败");
   }
  });
 });
})
submit.onclick='change()';//位置

//接口ajax
function change(url){
       xmlhttp = new XMLHttpRequest();
       
       xmlhttp.onreadystatechange=statechange();
       xmlhttp = open('get',url,true);
       
}
function statechange(){
       if(xmlhttp.readyState==4 &&xmlhttp.status==200){
              json = JSON.parse(xmlhttp.responseText)
         alert(responseText);

       }else{
           alert('请求错误'+responseText);
       }
       xmlhttp.send();
}
