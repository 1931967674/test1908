// ----------------------------------------------
// 冒泡法排序
// ----------------------------------------------
function fn(str) {
    //  定义空位置
    var sum = 0;
    //循环比较次数
    for (var i = 0; i < str.length; i++) {
        //循环做比较
        for (var j = 0; j < str.length - i; j++) {
            //判断大小
            if (str[j] > str[j + 1]) {
                //借助空位置调换位子
                sum = str[j];
                str[j] = str[j + 1];
                str[j + 1] = sum;
            }
        }
    }
    console.log(str);
}
// 传参
// fn(str);
// ----------------------------------------------
// 随机产生a到b之间的随机数
// ---------------------------------------------
function fn(a, b) {
    // 如果a>b 让a和b 换位子
    if (a > b) {
        //定义空位置
        var num = 0;
        //交换
        num = a;
        a = b;
        b = num;
    }
    //    产生a到b的随机数
    var num1 = Math.round(Math.random() * (a - b) + b);
    //值返回出去
    return num1;
}
//  ---------------------------------------------------------------
// 获取元素的到页面的距离 1
// ----------------------------------------------------------------
function element(ele, eve) {
    // console.log(ele.parentElement);
    if (eve == "top") {
        if (ele.offsetParent) {
            return element(ele.offsetParent) + ele.offsetTop;
        }
        return ele.offsetTop;
    }
    if (ele.offsetParent) {
        return element(ele.offsetParent) + ele.offsetLeft;
    }
    return ele.offsetLeft;
}
// ---------------------------------------------------------------
// 获取元素的到页面的距离 2
// ---------------------------------------------------------------
function element(ele, eve) {
    console.log(ele.parentElement);
    if (eve == "top") {
        if (ele.parentElement) {
            return element(ele.parentElement) + ele.offsetTop;
        }
        return ele.offsetTop;
    }
    if (ele.parentElement) {
        return element(ele.parentElement) + ele.offsetLeft;
    }
    return ele.offsetLeft;
}
// -----------------------------------------------------------------
// 字符串输出的次数
// -----------------------------------------------------------------

function fn(str) {
    var obj = {};
    // 便利字符
    for (var i = 0; i < str.length; i++) {
        var key = str.charAt(i);
        // console.log(key);
        if (obj[key]) {
            obj[key]++;
        } else {
            obj[key] = 1;
        }
    }
    // 便利对象
    for (var key in obj) {
        console.log(key + "这个字母输出" + obj[key] + "次");
    }
}
fn(str);
// ------------------------------------------------------------------
// 获取不同元素的当前值
// ------------------------------------------------------------------
function getStyle(ele, attr) {
    if (ele.currentStyle) {
        return ele.currentStyle[attr];
    }
    return getComputedStyle(ele, false)[attr];
}
// ----------------------------------------------------------------------
// 不同元素的封装
// ----------------------------------------------------------------------
function move(ele, attr, data) {
    // 处理数据
    var obj = data || {};
    var speed = obj.speed;
    var target = obj.target;

    var t = setInterval(function (eve) {
        var e = eve || window.event;
        var iNow = parseInt(getStyle(ele, attr));
        if (iNow + speed <= target) {
            ele.style[attr] = iNow + speed + "px";
        } else {
            clearInterval(t);
        }

    })
}
// ----------------------------------------------------------------------
// 不同浏览器的事件绑定封装
// ----------------------------------------------------------------------
function click(ele, type, hand) {
    //  判断浏览器
    console.log(ele);
    if (ele.addEventListener) {
        ele.addEventListener(type, hand, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + type, hand);
    }
}
// ----------------------------------------------------------------------
// 动画多属性的封装
// -----------------------------------------------------------------------
function move(ele, attr, target, back) {
    var obj = {};
    //   便利对象
    for (var i in attr) {
        obj[i] = parseInt(getStyle(ele, i));
    }
    //   定义一个计时器
    var time;
    var time1 = 30;
    // 运动的次数
    var num = Math.floor(target / time1);
    // console.log(num);
    // 计数器
    var sum = 0;
    // 开始运动
    time = setInterval(function () {
        sum++;
        console.log(sum);
        //   便利对象
        for (var i in obj) {
            // 计算步长 （目标-当前）/次数
            var speed = (attr[i] - obj[i]) / num;
            // console.log(speed);
            if (i.toLowerCase() === " opacity") {
                box.style[i] = obj[i] + sum * speed;
            } else {
                box.style[i] = obj[i] + sum * speed + "px";
            }

            if (sum >= num) {
                clearInterval(time);
                back && back();
            }
        }
    }, time1)



}
//获取当前值
function getStyle(ele, attr) {
    if (ele.currentStyle) {
        return ele.currentStyle[attr];
    } else {
        return getComputedStyle(ele)[attr];
    }

}
// -------------------------------------------------------------------
// 封装一个检测一个数组是否以另一个数组开头
function fn(str, str2, index) {
    // 处理index数据 如果传入数据以传入的数据为准，如果不传入就默认为零
    var num = index || 0;
    // 截取字符串
    var str3 = str.slice(num);
    return str3.indexOf(str2) == -1;
}
// --------------------------------------------------------------------
// 需求检索一个字符是否以另一个字符结尾
function fn(str, str1, index) {
    // 处理索引
    var num = index || str.length;
    var str2 = str.slice(0, num);
    var reg = new RegExp(str1 + "$");
    return reg.test(str2);
}
// -------------------------------------------------------------------
// 讲一个数组添加到另一个数组的任意位置
function add(str, str2, index) {
    //   处理索引
    var sum = index || 0;
    //   解构
    str.splice(sum, ...str2);
    console.log(str);
}
// --------------------------------------------------------------------
// 链接数据库的封装
// --------------------------------------------------------------------
// php 语法 
// function mysqlS($way, $user, $pass, $tab) {
//     $link =@new mysqli($way, $user, $pass, $tab);
//     if ($link -> connect_error) {
//         echo $link -> connect_error;
//     }

// }
// -------------------------------------------------------------------
// 数据库查询转化为json字符的封装
// -------------------------------------------------------------------
// function select($link, $table, $cb) {
//     $str = "select * from  $table ";
//     $res = $link -> query($str);
//     if ($res) {
//         $str1 = "";
//         while ($arr = $res -> fetch_assoc()) {
//             $str1 = $str1.json_encode($arr).",";
//         }
//         $cb("[".substr($str1, 0, -1)."]");
//     }
// }
// ------------------------------------------------------------------
// 数据库的曾，删改的封装；
// ------------------------------------------------------------------
// function operation($link, $str) {
//     $res = $link -> query($str);
//     if ($res) {
//         echo "操作成功";
//     } else {
//         echo "操作失败";
//     }

// }
// --------------------------------------------------------
// ajax get封装
// ---------------------------------------------------------
function ajaxGet(url, cb, data) {
    var obj = data || {};
    var str = '';
    for (var i in obj) {
        str += `${i}=${obj[i]}&`;
    }
    var d = new Date();
    url = url + "?" + str + d.getTime();
    console.log(url);
    // console.log(str);
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            cb(xhr.responseText);
        }
    }

    xhr.send();

}
// --------------------------------------------------------
// ajax -post 封装
// ---------------------------------------------------------
function ajaxPost(url, cb, data) {

    var obj = data || {};
    var str = "";
    for (var i in obj) {
        str += `${i}=${obj[i]}&`;
    }
    var d = new Date();
    str += d.getTime();
    var xhr = new XMLHttpRequest();
    xhr.open("post", url, true);
    xhr.onreadystatechange = function () {
        //    console.log(1);
        //   console.log(xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {

            cb(xhr.responseText);
        }
    }
    xhr.setRequestHeader("content-type", "application/X-WWW-form-urlencoded");
    xhr.send(str);

}




// --------------------------------------------------------
// ajax 封装
// ---------------------------------------------------------
function ajax(option) {
    var url = option.url;
    var type = option.type || "get";
    var obj = option.data || {};
    // console.log(obj);
    var str = "";
    for (var i in obj) {
        str += `${i}=${obj[i]}&`;
    }
    if (type == "post") {
        var d = new Date();
        url += "?" + str + "__wei=" + d.getTime();
    }
    var xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            option.cb(xhr.responseText);
        }
    }
    if (type == "post") {
        xhr.setRequestHeader("content-type", "application/X-WWW-form-urlencoded");
        xhr.send(str);
    } else {
        xhr.send();
    }

}
// ----------------------------------------------------------------------------------
// jsonp的封装
// ----------------------------------------------------------------------------------
function jsonS(url, cb, data) {
    var obj = data || {};
    var str = "";
    for (var i in obj) {
        str += `${i}=${obj[i]}&`;
    }
    console.log(str);
    var d = new Date();
    url += "?" + str + d.getTime();
    var scr = document.createElement("script");
    scr.src = url;
    document.body.appendChild(scr);
    // console.log(obj.cook);
    window[obj[obj.cbName]] = function (res) {
        cb(res);
    }
}
//  ----------------------------------------------------------------------------
// ajax的总级封装
// -----------------------------------------------------------------------------
ajax({
    type: "get",
    data: {
        id: 0,
        name: fjksda,
       price:88,
    },
    success: function (res) {
        add(res)
        
    }
})
 
function add() {
    
}

function ajax(options) {
     // 1.解析参数
     let {
         type,
         url,
         data,
         timeOut,
         beforeSend,
         error,
         success
     } = options;
     type = type || "get";
     timeOut = timeOut || 500;
     data = data || {};
     // 3.处理信息
     var str = "";
     for (var i in data) {
         str += `${i}=${data[i]}&`;
     }
     // console.log(str);
     // 2.决定执行功能
     let d = new Date();
     let xhr = new XMLHttpRequest();
     if (type == "get") {
         url = url + "?" + str + "__wei=" + d.getTime();
         xhr.open("get", url, true);
         xhr.onreadystatechange = function () {
             if (xhr.readyState != 4) {
                 beforeSend && beforeSend();
             } else if (xhr.readyState == 4 && xhr.status == 200) {
                 success && success(xhr.responseText);
                 error = null;
             } else if (xhr.readyState == 4 && xhr.status != 200) {
                 error && error(xhr.status);
             }
         }
         xhr.send();
     } else if (type == "post") {
         xhr.open("post", url, true);
         xhr.onreadystatechange = function () {
             if (xhr.readyState != 4) {
                 beforeSend && beforeSend();
             } else if (xhr.readyState == 4 && xhr.status == 200) {
                 success && success(xhr.responseText);
                 error = null;
             } else if (xhr.readyState == 4 && xhr.status != 200) {
                 error && error(xhr.status);
             }
         }
         xhr.setRequestHeader("content-type", "application/X-WWW-form-urlencoded");
         xhr.send(str.slice(0, str.length - 1));

     } else if (type == "jsonp") {
         url = url + "?" + str + "__wei=" + d.getTime();
         let script = document.createElement("script");
         script.src = url;
         document.body.appendChild(script);
         beforeSend && beforeSend();
         window[data[data.columName]] = function (res) {
             success && success(res);
         }
     }
     setTimeout(() => {
         error && error("setTimeOut");
         success = null;
     }, 100);
 }

//  ----------------------------------------------------------------------------
// cook的封装
// -----------------------------------------------------------------------------
function cook(key, val, data) {
    // 处理数据
    var obj = data || {};
    if (obj.path) {
        var path = ";path=" + obj.path;
    } else {
        var path = "";
    }
    if (obj.expires) {
        var d = new Date();
        d.setDate(d.getDate() + obj.expires);
        var exp = ";expires=" + d;
    }
    console.log(d.getDate());
    document.cookie = key + "=" + val + path + exp;

}
// --------------------------------------------------------------------------
// 事件委托的封装
// ------------------------------------------------------------------------------
addEventListener("click", bail(li, function () {
    console.log(this);
}));

function bail(a, cb) {
    return function (e) {
        for (var i = 0; i < a.length; i++) {
            if (li[i] == e.target) {
                cb.bind(e.target)();
            }
        }

    }

}