<!-- 我的-关于markdown文档配置 -->
---
layout: docs
seo_title: 关于
bottom_meta: false
sidebar: []
valine:
  placeholder: 有什么想对我说的呢？
---
{% p center logo large red, 关 %}{% p center logo large blue, 于 %}
<!-- https://www.bootcdn.cn/botui/ -->
<link href="https://cdn.bootcss.com/botui/0.3.9/botui-theme-default.css" rel="stylesheet">
<link href="https://cdn.bootcss.com/botui/0.3.9/botui.min.css" rel="stylesheet">
{% raw %}
<!-- 因为vue和botui更新导至bug,现将对话移至js下的botui中配置 -->
<div class="entry-content">
  <div id="kelecnbot" class="popcontainer" style="min-height: 0px; padding: 2px 6px 4px; background-color: rgba(255, 255, 255, 0.5); border-radius: 10px;">
 <center>您正在与&nbsp;kelecn&nbsp;对话中...</center> 
<bot-ui></botui>
  </div>
<!--iframe src="https://kelecn.top/donate/simple/" style="overflow-x:hidden;overflow-y:hidden; border:0xp none #fff; min-height:240px; width:100%;"  frameborder="0" scrolling="no"></iframe-->
</div>
<script src="https://fastly.jsdelivr.net/gh/huangwb8/bloghelper@latest/js/checkbot/botui_bensz.js"></script>
<script>
bot_ui_ini()
</script>
{% endraw %}
