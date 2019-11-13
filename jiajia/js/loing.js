 var inp = $(".post input")
 var op = $(" .post span")
 var u = p = ap = t = false;
 //   -------------------------------------------------------
 // 判断是否全部验证通过；

 //   验证用户名
 inp[0].onblur = function () {
     // 判断用户名是否为空；
     if (this.value.length <= 0) {
         // 如果为空就输出用户名为空
         op[0].innerHTML = "用户名不能为空";
         // 停止代码执行
         return;
     }
     // 如果不为空就验证
     var reg = /^[a-zA-z]+\w{5,12}/;
     var user = reg.test(this.value);
     if (user) {
         // 设置成功后输出设置成功；
         op[0].innerHTML = "设置成功";
         u = true;
     } else {
         // 否则输出设置的格式
         op[0].innerHTML = "请输入以字母开头6-12位用户名";
     }
 }

 // ---------------------------------------------------------
 // 设置密码
 inp[1].onblur = function () {

     // 判断密码是否为空
     if (this.value.length <= 0) {
         // 如果为空就输出不能为空
         op[1].innerHTML = "密码不能为空";
         return;
     }
     // 验证密码
     var reg = /^[a-zA-z0-9—_@$]{6,8}/;
     var pass = reg.test(this.value);
     if (pass) {
         // 验证成功就判断密码强度

         Strength(this.value);
         p = true;
     } else {
         // 验证不成功就输出密码格式；
         op[1].innerHTML = "请输入以字母开,数字，下滑线，$组合设置6-8位";
     }

 }

 // -------------------
 // 判断密码强度
 function Strength(values) {
     var num = /\d/;
     var num1 = /[a-zA-Z]/g;
     var num2 = /[$_.@]/;
     var sum1 = 0;
     var sum2 = 0;
     var sum3 = 0;
     // 计数器；
     var sum = 0;
     // 验证是否有数字
     if (num.test(values)) {
         sum1 = 1;

     }
     // console.log(sum1);
     // 判断是否有字母
     if (num1.test(values)) {
         sum2 = 1;
     }
     // 判断是否有特殊符号
     if (num2.test(values)) {
         sum3 = 1;
     }
     sum = sum1 + sum2 + sum3;

     switch (sum) {
         case 1:
             op[1].innerHTML = "密码强度弱";
             break;
         case 2:
             op[1].innerHTML = "密码强度一般";
             break;
         case 3:
             op[1].innerHTML = "密码强度强";

     }
 }
 // ----------------------------------------------------------
 // 设置确认密码
 inp[2].onblur = function () {
     if (p == true) {
         if (inp[2].value === inp[1].value) {
             op[2].innerHTML = "验证成功";
             ap = true;
         } else {
             op[2].innerHTML = "两次密码不一致";
         }
     }

 }
 // ---------------------------------------------
 // 判断练习方式
 inp[3].onblur = function () {
     var reg = /^1[3456789]\d{9}$/;
     var num = reg.test(this.value);
     if (num) {
         op[3].innerHTML = "操作成功";
         t = true;
     } else {
         op[3].innerHTML = "请填写正确的联系方式格式";
     }
 }
 // -----------------------------------------------------
 // 判断提交
$(".sub").on("click", function () {
    // console.log(u , p , ap , t);
    if (u = p = ap = t) {
        alert("提交成功");
        var obj = {
            user: inp[0].value,
            pass:inp[1].value
        }
        console.log(obj);
         localStorage.setItem("user", JSON.stringify(obj));
         } else {
             if (u == "false") {
                 alert("用户名格式不正确");
             } else if (p == "false") {
                 alert("密码格式不正确");
             } else if (t == "false") {
                 alert("联系方式格式不正确");
             }
         }
})


