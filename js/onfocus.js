// 浏览器搞笑标题  快回来!!! 终于回来了
// Based on: https://static.likepoems.com/cdn/javascript/onfocus.js
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '╭(°A°`)╮ 你去哪了?!';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '(ฅ>ω<*ฅ) 你肥来啦!';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
