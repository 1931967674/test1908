class car{
    constructor() {
        // 读取local数据
        this.res = JSON.parse(localStorage.getItem('wei')) || "";
        // this.ajax(this.res);
        // 渲染数据
        this.style();
        // console.log(this.res);
        // 绑定点击事件
        this.click();
       
    }
    
    click() {
        var sam = 0;
        var that = this;
        // 绑定点击删除事件
        $("tbody")[0].addEventListener("click", trust("dele", function () {
            that.id = this.parentNode.parentNode.getAttribute("index");
            that.del(this);
        }))
        // 点击求和事件
        $("tbody")[0].addEventListener("click", trust("election", function () {
            that.str = [];
            for (var i = 0; i < $(".election").length; i++){
                if ($(".election")[i].checked) {
                     that.num = parseInt($(".election")[i].parentNode.parentNode.lastElementChild.innerHTML);
                     that.sum();
                }
            }
        that.sqm();
            
        }))
    //     $(".cheA")[0].addEventListener("click", function () {
    //         for (var i = 0; i < $(".election").length; i++){
    //             $(".election")[i].checked = "checked";
    //         }
            
    //     })
    //     $(".che")[0].addEventListener("click", function () {
    //         for (var i = 0; i < $(".election").length; i++) {
    //             $(".election")[i].checked = "";
    //         }
    //     })
    }
    // 求和
    sum() {
        this.str.push(this.num);
        //   this.str = norepeat(this.str);
         
    }
    // 求和方法
    sqm() {  
        console.log(this.str);
      var ssm = 0;
        for (var i = 0; i < this.str.length; i++){
            ssm+=this.str[i]
        }
        $(".sun").html(ssm);
    }
    // 点击删除
    del(ele) {
       ele.parentNode.parentNode.remove();
      }
    // 样式渲染
    style() {
        var str = '';
        // console.log(this.res[0].num);
        // console.log((this.res[0].parse));
        for (var i = 0; i < this.res.length; i++){
            // var sum = (parseInt(this.res[i].num));
            str += `<tr index="${this.res[i].id}">
                <td><input type="checkbox" class="election"></td>
                <td><img src="${this.res[i].url}"></td>
                <td>${this.res[i].name}</td>
                <td>${this.res[i].num}</td>
                <td>${this.res[i].parse}</td>
                <td><span class="dele">&times;<span/></td>
                <td class="sum">${parseInt(this.res[i].num)*parseInt(this.res[i].parse)}</td>
            </tr>`
        }
        $("tbody").html(str);
    }
}
new car();
// --------------------------------------
// 事件委托的封装
function trust(cla, cb) {
    return function (e) {
        var e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.className == cla) {
            cb.bind(target)();
        }
    }
}
// ---------------------------------------------
// 数组去重的方法
function norepeat(arr) {
    arr.sort();
    //先排序让大概相同的在一个位置，这里为什么说是大概相同 是因为sort排序是把元素当字符串排序的 它和可能排成 1 1 10 11 2 20 3 ... 不是我们想要的从小到大
    for (var i = 0; i < arr.length - 1; i++) {
        //还是两两比较 一样删除后面的
        if (arr[i] == arr[i + 1]) {
            arr.splice(i, 1);
            //i-- 和j--同理
            i--;
        }
    }
    return arr;
}