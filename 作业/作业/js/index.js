// 1 nav模块 选中对应文字，文字变色
(function(){
    //获取元素
    var navUl = document.getElementById('nav_ul');
    var lis = navUl.getElementsByTagName('li');
    //绑定鼠标经过事件
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            //全部li类名格式化
            for (var i = 0; i < lis.length; i++) {
                var index=lis[i];
                lis[i].className = '';
            }
            //鼠标移动的li类名命名
            this.className = 'active';
        }
    }
})();
//banner模块 
// 2 左侧列表栏划到对应列表内容时展示对应内容
(function(){
    // 获取元素
    var show = document.querySelector(".show .all-class .show");
    var MH=document.getElementsByClassName('men-hiden');
    var lis = show.children;
     //绑定鼠标经过事件
     for (var i = 0; i < lis.length; i++) {
         lis[i].index=i;
        lis[i].onmouseover = function () {
            // console.log(MH.length);
            // //鼠标移动的li类名命名
            // console.log(this.index);
            console.log(this);
            // this.children[1].style.display = 'block';
        }
        console.log(i);
        lis[i].onmouseout = function () {
        //     //其他li类名命名
            this.children[1].display='none';
        }
    }
    
})();
// 3 轮播图部分自动轮播
// (function(){

// })();
//   1） 实现对应小圆圈对应图片选中
//   2） 鼠标进入轮播图部分停止轮播
//   3） 鼠标离开轮播图部分轮播图自动轮播

// 4 直播课倒计时效果实现
// (function countDown(time){
//     var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
//             var inputTime = +new Date(time); // 返回的是用户输入时间总的毫秒数
//             var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数 
//             var d = parseInt(times / 60 / 60 / 24); // 天
//             d = d < 10 ? '0' + d : d;
//             var h = parseInt(times / 60 / 60 % 24); //时
//             h = h < 10 ? '0' + h : h;
//             var m = parseInt(times / 60 % 60); // 分
//             m = m < 10 ? '0' + m : m;
//             var s = parseInt(times % 60); // 当前的秒
//             s = s < 10 ? '0' + s : s;
//             return d + '天' + h + '时' + m + '分' + s + '秒';
// })