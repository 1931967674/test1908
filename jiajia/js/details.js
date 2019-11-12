//请求公共数据渲染顶部
$.ajax({
    url: "http://localhost/jiajia/data/top.html",
    success: function (res) {
        $(".nav_").html(res);
    }
});
//  请求公共数据渲染底部
$.ajax({
    url: "http://localhost/jiajia/data/foot.html",
    success: function (res) {
        $(".foot_").html(res);
    }
});
// 放大镜的设置
$(".glass").hover(function () {
    $(".cover").css({
       display:"block"
    })
      $(".detail").css({
          display: "block"
      })
}, function () {
     $(".cover").css({
         display: "none"
     })
          $(".detail").css({
              display: "none"
          })
})
// 放大镜的功能
  var list = document.querySelector(".list"),
      imgs = list.querySelectorAll("img"),
      img = document.querySelector(".pic img"),
      pic = document.querySelector(".itemarea .pic"),
      cover = document.querySelector(".cover"),
      detail = document.querySelector('.detail');
  list.addEventListener("mousemove", function (e) {
      if (e.target.tagName == "IMG") { //判断ul里面的li的img是否等于IMG，如果等于，执行，这是js的事件委托，一种机制，父元素设置，给子元素触发
          img.src = e.target.src; //将当前元素img的src赋给img
          detail.style.backgroundImage = 'url(' + e.target.src + ')';
          imgs.forEach(function (item) { //forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数
              item.className = ""; //让img的类名等于空，循环判断，清空所有img的类名
          })
          e.target.className = "current"; //给当前元素设置类名
      }
  })
  pic.addEventListener("mousemove", function (e) {
      var x = e.clientX,
          y = e.clientY,
          cx = pic.getBoundingClientRect().left,
          cy = pic.getBoundingClientRect().top,
          tx = x - cx - 75,
          ty = y - cy - 75;
      if (tx < 0) {
          tx = 0;
      }
      if (ty < 0) {
          ty = 0;
      }
      if (tx > 250) {
          tx = 250;
      }
      if (ty > 150) {
          ty = 150;
      }
      detail.style.backgroundPosition = tx / 250 * 100 + '%' + ty / 150 * 100 + '%';
      cover.style.left = tx + 'px';
      cover.style.top = ty + 'px';
  })
//  放大镜换图片功能
var obj = JSON.parse(localStorage.getItem('index')) || "";
// console.log($(".itemarea .pic img").attr() );
$(".itemarea .pic img")[0].src = obj.url;
$(".itemarea .detail").css({
    background: "url(" + obj.url + ")",
})
$(".itemarea .detail")[0].backgroundRepeat = 'no-repeat';
// 购物车功能 --------------------------------
  
class data{
    constructor() {
        this.obj1 = JSON.parse(localStorage.getItem('wei')) || "";
        this.obj = JSON.parse(localStorage.getItem('index')) || "";
       
       
        // 添加加减功能
        this.snm();
        // 存购物车功能
        this.carRes();
    }
    // 存购物车功能
    carRes() {
        // console.log(that.obj1);
        var that = this;
        var str = [];
        for (var j = 0; j < that.obj1.length; j++){
            str.push(that.obj1[j]);
        }
        
        $(".car-s").on("click", function () {
        
            that.obj.num = $(".mum")[0].innerHTML;
            // 第一次加购物车
            if (str.length < 1) {
                str.push(that.obj);
            } else {
                // 非第一次
                var flag = true;
                for (var i = 0; i < str.length; i++){
                    // console.log(str[i].id,that.obj.id)
                    if (str[i].id == that.obj.id) {
                        str[i].num++;
                        flag = false;
                        break;
                    } 
                }

                if (flag) {
                    str.push(that.obj);
                }
            }
             
            //   console.log(str);
            localStorage.setItem("wei", JSON.stringify(str));
        })
    }

    // 加减功能
    snm() {
        // console.log($(".jia"));
        $(".jia").on("click", function () {
            $(".mum")[0].innerHTML++;
        })
        $(".jan").on("click", function () {
            $(".mum")[0].innerHTML--;
            if ($(".mum")[0].innerHTML < 1) {
                $(".mum")[0].innerHTML =1
            }
        })
    }
}
new data();