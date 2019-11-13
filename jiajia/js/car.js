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
    // 绑定点击事件
    click() {
        var that = this;

        $("tbody")[0].addEventListener("click", trust("dele", function () {
            that.id = this.parentNode.parentNode.getAttribute("index");
            that.del(this);
        }))
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
                <td>${parseInt(this.res[i].num)*parseInt(this.res[i].parse)}</td>
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