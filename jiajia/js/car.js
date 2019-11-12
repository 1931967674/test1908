class car{
    constructor() {
        // 读取local数据
        this.res = JSON.parse(localStorage.getItem('wei')) || "";
        // this.ajax(this.res);
        this.style();
        console.log(this.res);
    }
    style() {
        var str = '';
        for (var i = 0; i < this.res.length; i++){
            var sum = (parseInt(this.res[i].num));
            str += `<tr index="${this.res[i].Id}">
                <td><input type="checkbox" class="election"></td>
                <td><img src="${this.res[i].url}"></td>
                <td>${this.res[i].name}</td>
                <td>${this.res[i].num}</td>
                <td>${this.res[i].parse}</td>
                <td><span class="dele">&times;<span/></td>
                <td>${1*this.res[i]}</td>
            </tr>`
        }
        $("tbody").html(str);
    }
}
new car();