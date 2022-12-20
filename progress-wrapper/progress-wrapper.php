<!-- 用法
    在sidebar.php中<div id="leftbar_part2" class="widget widget_search card bg-white shadow-sm border-0">标签前引用下列命令即可.
    注意，第一个!记得去掉！
    <!?php require('./specialEffects/progress-wrapper.php'); ?>
-->

<!-- 换行符 -->
<style type="text/css">
    .high01{
        line-height: 0.6rem
    }
</style>

<!-- 主体 -->
<div class="high01"><br></div>
<div class="card bg-white shadow-sm border-0">
<div class="progress-wrapper" style="padding: 0.8rem">
        <div class="progress-info">
            <div class="progress-label">
                <span id="yearprogress_yearname" style="color: var(--themecolor); background-color: rgba(var(--themecolor-rgbstr), 0.1); font-size: 1rem"></span>
            </div>
            <div id="yearprogress_text_container" class="progress-percentage">
                <!-- <span id="yearprogress_progresstext" style="color: var(--themecolor); font-size: 1rem"></span> -->
                <span id="yearprogress_progresstext_full" style="color: var(--themecolor); font-size: 1rem"></span>
            </div>
        </div>
        <div class="progress" style="background-color: #CE7777">
            <div id="yearprogress_progressbar" class="progress-bar" style="background-color: var(--themecolor)"></div>
            <!-- style="background-color: #CE7777" -->
        </div>
    </div>
    <script no-pjax="">
        function yearprogress_refresh() {
            let year = new Date().getFullYear();
            $("#yearprogress_yearname").text(year);
            let from = new Date(year, 0, 1, 0, 0, 0);
            let to = new Date(year, 11, 31, 23, 59, 59);
            let now = new Date();
            let progress = (((now - from) / (to - from + 1)) * 100).toFixed(7);
            let progressshort = (((now - from) / (to - from + 1)) * 100).toFixed(2);
            $("#yearprogress_progresstext").text(progressshort + "%");
            $("#yearprogress_progresstext_full").text(progress + "%");
            $("#yearprogress_progressbar").css("width", progress + "%");
        }
        yearprogress_refresh();
        if (typeof yearProgressIntervalHasSet == "undefined") {
            var yearProgressIntervalHasSet = true;
            setInterval(function () {
                yearprogress_refresh();
            }, 500);
        }
    </script>
    <style>
        #yearprogress_text_container {
            width: 100%;
            height: 22px;
            overflow: hidden;
            user-select: none;
        }

        #yearprogress_text_container>span {
            transition: all 0.3s ease;
        }

        /* #yearprogress_text_container:hover>span {
            transform: translateY(-20px);
        } */
    </style>
</div>
<!-- <div class="high01"><br></div> -->