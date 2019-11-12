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
// 渲染页面
$.ajax({
    url: "http://localhost/jiajia/data/list1.json",
    success: function (res) {
        listM(res);
        var str = [];
        local(res);

    }
});

function listM(res) {
    var str = "";
    for (var i = 0; i < res.length; i++) {
        str += `<li index="${res[i].id}"><a href="details.html">
             <img src="${res[i].url}">
                        <p>${res[i].name}</p>
                        <span>${res[i].parse}</span>
                        < p > 家家购物自营 </p></a >
                    </li>`;
    }
    $(".listWork-right ul").html(str);
}
// 详情链接
// 详情链接
function local(res) {
  
    $(".listWork-right ul").find("li").on("click", function () {
        // console.log(that.str);
        var num = $(this).index();

        localStorage.setItem("index", JSON.stringify(res[num]));
    })
}
