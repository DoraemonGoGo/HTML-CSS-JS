// 1 nav模块 选中对应文字，文字变色
(function () {
    //获取元素
    var navUl = document.getElementById('nav_ul');
    var lis = navUl.getElementsByTagName('li');
    //绑定鼠标经过事件
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            //全部li类名格式化
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            //鼠标移动的li类名命名
            this.className = 'active';
        }
    }
})();
//banner模块 
// 2 左侧列表栏划到对应列表内容时展示对应内容
(function () {
    // 获取元素
    var show = document.querySelector(".show .all-class .show");
    var lis = show.children;
    //绑定鼠标经过事件
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            //鼠标移动li类名命名
            this.children[1].style.height = "230px";
        }
        lis[i].onmouseout = function () {
            //鼠标移走li类名命名
            this.children[1].style.height = "0px";
        }
    }
})();

// 3 轮播图部分自动轮播
(function () {
    //获取含img的ul元素
    var publish_slider = document.querySelector("#publish-copy");
    var lis = publish_slider.getElementsByTagName('li');
    //   1） 实现对应小圆圈对应图片选中
    //获取圆点元素
    var b_dot = document.querySelectorAll(".b_dot a");
    for (var i = 0; i < b_dot.length; i++) {
        //绑定小圆圈点击事件
        b_dot[i].onclick = function () {
            //排他思想 格式化其他元素
            for (var i = 0; i < b_dot.length; i++) {
                b_dot[i].className = '';
                b_dot[i].index = i;
                // console.log(b_dot.index);
                lis[i].className='';
                lis[i].style.display='none';
                lis[i].style.zIndex='0';
            }
            this.className = 'on';
            var index = this.getAttribute('index');
            var publishWidth = publish_slider.offsetWidth;
            // console.log(this.index);
            lis[this.index].style.zIndex='1';
            lis[this.index].style.display='block';
            animate(publish_slider, -index * publishWidth);

        }

    } 
    var first = publish_slider.children[0].cloneNode(true);
    //  2)   鼠标进入轮播图部分停止轮播
    publish_slider.addEventListener('mouseenter', function () {
        clearInterval(timer);
        timer = null; // 清除定时器变量
    });
    //  3)   鼠标离开轮播图部分轮播图自动轮播
    publish_slider.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
            //手动调用点击事件
            index++;
            b_dot[index].onclick;
        }, 2000);
    });
})();


// 4 直播课倒计时效果实现
(function () {
    // 目标时间的时间戳s
    var endDate = new Date('2020-4-10 15:00:00');
    var end = endDate.getTime();

    // 获取天时分秒的盒子
    var spanDay = document.getElementById('_d');
    var spanHour = document.getElementById('_h');
    var spanMinute = document.getElementById('_m');
    var spanSecond = document.getElementById('_s');

    // 开启定时器
    setInterval(countdown, 1000);

    countdown();
    // 倒计时
    function countdown() {
        // 当前时间的时间戳
        var nowDate = new Date();
        var now = nowDate.getTime();

        // 计算时间差（毫秒）
        var leftTime = end - now;
        // 相差的秒数
        leftTime /= 1000;

        // 求 相差的天数/小时数/分钟数/秒数
        var day, hour, minute, second;

        day = Math.floor(leftTime / 60 / 60 / 24);
        hour = Math.floor(leftTime / 60 / 60 % 24);
        minute = Math.floor(leftTime / 60 % 60);
        second = Math.floor(leftTime % 60);

        // 设置盒子的内容
        spanDay.innerText = day;
        spanHour.innerText = hour;
        spanMinute.innerText = minute;
        spanSecond.innerText = second;

    }
})();