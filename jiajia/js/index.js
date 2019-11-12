
// 导航栏特效
$(".nas").find("div").hover(function () {
    $(".nas").children("div").css({
        color: "#000"
    }).eq($(this).index()).css({
        color: "red"
    })
})
// 轮播图

$(".bans").banner({
    imgs: $(".bans img"),
    left: $(".bansLeft"),
    right: $(".bansRight")
})
// 内容特效
var workList = $(".work-list");
var listP = $(".work-list span")

addEventListener("click", bail(workList, function () {
    for (var i = 0; i < listP.length - 1; i++){
        $(listP[i]).css({
             borderBottom:""
        })
    } 
    $(this).css({
        borderBottom: "1px solid red"
    })
    
}));
function bail(a, cb) {
    return function (e) {
        var e = e || window.event;
        // console.log(listP);
        for (var i = 0; i < a.length; i++) {
            if (e.target.nodeName =="SPAN") {
                cb.bind(e.target)();
            }
        }

    }
}
// 轮播图
$(".bans1").banner({
    imgs: $(".bans1 img"),
    left: $(".bans1Left"),
    right: $(".bans1Right"),
    list:false
})
// 轮播图
$(".buq-left").banner({
    imgs: $(".buq-left img"),
    left: $(".buq-left-sub"),
    right: $(".buq-right-sub"),
    list: false
})
$(".buw-banns").banner({
    imgs: $(".buw-banns img"),
    left: $(".buq-left-sub"),
    right: $(".buq-right-sub"),
    list: false
})
$(".buw-s-banns").banner({
    imgs: $(".buw-s-banns img"),
    left: $(".buq-left-sub"),
    right: $(".buq-right-sub"),
    list: false
})
// 楼层特效
$(".floor ul").find("li").on("click", function () {
    $(".floor ul").children("li").css({
        background: ""
    }).eq($(this).index()).css({
        background: "#ffcc00",
        scrollTop: 1000
    });
     $("html").animate({
                 scrollTop: $(".wei").eq($(this).index()).offset().top
             })
})
