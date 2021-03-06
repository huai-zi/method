/*点击返回顶部*/
$('id名').click(function() {
    $('html,body').animate({ "scrollTop": 0 }, 500);
});


/*单页面进行跳转到指定的锚点动画跳转*/
$('需要点击的a标签锚点,需要使用href配置a中的id名').click(function(e) {
    $('html, body').animate({ scrollTop: $('输入调转到的id名').offset().top }, 400);
    return false
});

/*简单的轮播效果*/
var t = n = 0,
    count;

count = $("#banner_list a").length;

$("#banner_list a:not(:first-child)").hide();
/*书写下面点击的点*/
$("#banner li").click(function() {
    var i = $(this).index(); //获取Li元素内的值，即1，2，3，4
    n = i;

    if (i >= count) return;

    $("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);

    document.getElementById("banner").style.background = "";

    $(this).toggleClass("on");

    $(this).siblings().removeAttr("class");
});
/*控制时间*/
t = setInterval(function() {
    n = n >= (count - 1) ? 0 : ++n;

    $("#banner li").eq(n).trigger('click');
}, 3000);

$("#banner").hover(function() {
    clearInterval(t)
}, function() {
    t = setInterval(function() {
        n = n >= (count - 1) ? 0 : ++n;

        $("#banner li").eq(n).trigger('click');
    }, 3000);
});



/*js刷新页面直接返回顶部*/
window.onload = function() {
    /*刷新之后直接返回顶部*/
    if (document.body.scrollTop > 0) {
        setTimeout(function() {
            return window.scrollTo(0, 0);
        }, 150);
        document.body.scrollTop = 0;
    }
    setTimeout(function() {
        return window.scrollTo(0, 0);
    }, 150);
    document.body.scrollTop = 0;
}



/*禁止f5刷新*/
document.onkeydown = function(e) {
    var ev = window.event || e;
    var code = ev.keyCode || ev.which;
    if (code == 116) {
        ev.keyCode ? ev.keyCode = 0 : ev.which = 0;
        cancelBubble = true;
        return false;
    }
} //禁止f5刷新
document.oncontextmenu = function() { return false }; //禁止右键刷新


/*刷新才会调用的函数,会记录滚动条的位置,直接进行添加比较位置的大小再进行滚屏事件的触发*/
function ScollPostion() { //滚动条位置
    var t, l, w, h;
    if (document.documentElement && document.documentElement.scrollTop) {
        t = document.documentElement.scrollTop;
        l = document.documentElement.scrollLeft;
        w = document.documentElement.scrollWidth;
        h = document.documentElement.scrollHeight;
    } else if (document.body) {
        t = document.body.scrollTop;
        l = document.body.scrollLeft;
        w = document.body.scrollWidth;
        h = document.body.scrollHeight;
    }
    return { top: t, left: l, width: w, height: h };
}


/*判断设备是手机端试试pc端,进行跳转页面*/
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        //手机页面
        window.location.href = "手机端的连接";
    } else {
        //PC页面
        window.location.href = "pc端的连接";

    }
}
browserRedirect();


/*判断设备是移动端还是pc端,返回boolean值*/
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
var ff = IsPC();
console.log(ff);

/*判断设备是移动端还是pc端*/
var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
var browser = navigator.userAgent.toLowerCase();
var isMobile = false;
for (var i = 0; i < mobileAgent.length; i++) {
    if (browser.indexOf(mobileAgent[i]) != -1) {
        isMobile = true;
        //alert(mobileAgent[i]); 
        location.href = 'wap.html' /*tpa=http://qm.wt925.com/wap.html*/ ;

        break;
    }
}




/*jq提交from表单,不需要submit按钮,直接使用button来代替*/
function jqajax() {
    var data = { userName: $("#username").val(), age: $("#age").val(), content: $("#content").val() };
    console.log(data);
    var url = "./test.php"; /*需要书写的url地址*/
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        beforeSend: function() {
            /*数据处理在成功之前*/
            $("#span_content").text("数据处理中...");
        },
        success: function(msg) {
            /*成功后执行的函数*/
            alert('提交数据成功')
            console.log(msg);
        }
    });
}




/*点击按钮复制文本*/
function copyArticle(event) {
    const range = document.createRange();
    range.selectNode(document.getElementById('复制文本的id'));
    const selection = window.getSelection();
    if (selection.rangeCount > 0) selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('点击按钮的id');
}
document.getElementById('点击按钮的id').addEventListener('click', copyArticle, false);



/*需要在htm行内属性中设置font-size为100px的,开始监听屏幕尺寸,第一次,在768px手机屏幕下显示的是200px*/
var html = document.getElementsByTagName("html")[0];
width = window.innerWidth;
/*计算屏幕变化的同时,我们计算的值*/
var fontSize = 100 / 768 * width;
/*时刻监听我们的屏幕大小,来计算我们的字体大小*/
html.style.fontSize = fontSize + "px";

window.onresize = function() {
    var html = document.getElementsByTagName("html")[0];
    width = window.innerWidth;
    /*计算屏幕变化的同时,我们计算的值*/
    var fontSize = 100 / 768 * width;
    html.style.fontSize = fontSize + "px";
}



/*自动刷新传递参数*/
window.onload = function() {
    if (location.search.indexOf("?") == -1) {
        location.href += "?myurl";
    } else {
        if (location.search.indexOf("myurl") == -1) location.href += "&myurl";
    }
}


/*微博分享连接*/
/*http://service.weibo.com/share/share.php?url=http://t.cn/RNnjKrJ&title=%E5%87%A4%E9%93%BE%E5%9B%BD%E9%99%85%E6%88%91%E7%9A%84%E9%9C%80%E6%B1%82&retcode=6102#_loginLayer_1504522954839
 */
*
/*邮箱分享地址*/
/*mail.qq.com跳转的地址,outlook.live.com邮箱*/


/*上传数据,获取图片的地址*/
/*
    
 */



/*复制文本按钮*/
/*点击按钮复制文本*/
function copyArticle(event) {
    const range = document.createRange();
    /*填写的数据为想要复制的值*/
    range.selectNode(document.getElementById('token-bumber-hxz'));
    const selection = window.getSelection();
    if (selection.rangeCount > 0) selection.removeAllRanges();
    selection.addRange(range);
    /*填写的是点击按钮*/
    document.execCommand('token-copy-hxz');
}
/*需要点击按钮id*/
document.getElementById('token-copy-hxz').addEventListener('click', copyArticle, false);


/*当file进行改变的时候,将获取到的图片的路径,进行base64加密*/
var file = this.files[0];
if (window.FileReader) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    //监听文件读取结束后事件    
    reader.onloadend = function(e) {
        console.log(e.target.result) //这里给出的是base64加密的路径
        //e.target.result就是最后的路径地址
    };
}

/*将数组对象进行从大到小的排序*/
var data = [{
        "xm": "柳立",
        "sdf": "20"
    },
    {
        "xm": "刘青",
        "sdf": "17"
    }
]
var compare = function(obj1, obj2) {
    var val1 = obj1.sdf;
    var val2 = obj2.sdf;
    if (val1 < val2) {
        return 1;
    } else if (val1 > val2) {
        return -1;
    } else {
        return 0;
    }
}
/*将数组对象的值进行比较再传出*/
data = data.sort(compare);