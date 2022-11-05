
/*
* BotUI回复配置
*/
var botui = new BotUI("kelecnbot");
botui.message.bot({
   delay: 200,
   content: "Hi，小伙伴们👋👋👋"
}).then(function() {
   return botui.message.bot({
       delay: 1000,
       content: "我是Bensz，可以叫我苯苯！"
   })
}).then(function() {
   return botui.message.bot({
       delay: 1000,
       content: "是一个每天在镜子前给自己磕头的硬核...咳咳！"
   })
}).then(function(){
   // 限制递归的数量：
   return resCircle(8)
});


// 异常对话相关的递归函数
// numCircle可以指定递归的最大次数。
var resCircle = function(numCircle) {

   // 一个关于消极态度的集合
   var negEva = ["小姐姐呐？ 🙄","我劝你善良！ 😆","搞事情是吧？ 😈","哇酷哇酷！ 😋","快把小姐姐交出来！😍","别挡着我看小姐姐 😆"]; 
   var indexNegEva = Math.floor((Math.random()*negEva.length)); 
   var negText = negEva[indexNegEva];

   // 一个关于消极态度response的集合
   var negResponse = ["本想介绍小姐姐给你认识，溜了溜了", "不要小姐姐了吗？", "不好意思，小姐姐归我了！", "哎，小姐姐只能独自伤心了。"]; 
   var indexNegResponse = Math.floor((Math.random()*negResponse.length)); 
   var negResponseText = negResponse[indexNegResponse];

   // 随机图链接
   var randPic = [
       "https://chevereto.hwb0307.com/images/2022/10/16/wallhaven-85x3v2.md.jpg",
	   "https://chevereto.hwb0307.com/images/2022/10/16/wallhaven-85x3v2.md.jpg"
   ]; 
   var indexrandPic = Math.floor((Math.random()*randPic.length)); 
   var targetURL= randPic[indexrandPic];

   botui.action.button({
       delay: 1500,
       action: [{
           text: "牛逼呀！ 😃",
           value: "and"
       },
       {
           text: negText,
           value: "gg"
       }]
   }).then(function(res){
       if (res.value == "and") {
           botui.message.bot({
               delay: 1500,
               content: "😘😘😘"
           }).then(function(){
               other()
           })
       } else if (numCircle === 0) {
           botui.message.bot({
               delay: 1500,
               content: "好了，不玩啦！你甚至不想称赞我哪怕一下...哎！"
           }).then(function(){
               other()
           })  
       } else {
           botui.message.bot({
               // loading: true,
               type: 'html',
               delay: 1500,
               content: negResponseText + '<br /><img src="' + targetURL + '" width="500">'
           }).then(function() {
               var numCircle2 = numCircle - 1
               // console.log(numCircle)
               return resCircle(numCircle2)
           }) 
       }
   })
}

// 正常对话信息
var other = function() {
   // botui.message.bot({
   //     delay: 1500,
   //     content: "😘😘😘"
   // }).then(function() {
   //     return 
   botui.message.bot({
           delay: 1500,
           content: "我喜欢折腾新事物和思考人生 ㄟ(▔,▔)ㄏ "
   }).then(function() {
       return botui.message.bot({
           delay: 1500,
           content: "略懂Linux/HTML/CSS/JavaScript/Python，专攻R"
       })
   }).then(function() {
       return botui.message.bot({
           delay: 1500,
           content: "主要研究方向：肿瘤学与生物信息学"
       })
   }).then(function() {
       return botui.message.bot({
           delay: 1500,
           content: "目前正在生物医学的道路上艰难求索..."
       })
   }).then(function() {
       return botui.action.button({
           delay: 1500,
           action: [{
               text: "为什么叫 Bensz 呢？ 🤔",
               value: "next"
           }]
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "很久以前，在游戏《龙之谷》中我以“苯神仔”为名自居。"
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "后来不知怎的就沿用下来了(～￣▽￣)～ "
       })
   }).then(function() {
       return botui.action.button({
           delay: 1500,
           action: [{
               text: "域名有什么含意吗？(ง •_•)ง",
               value: "next"
           }]
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "最初是在NAS中安装的，所以以blognas开头。"
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "后来为了公众化，转移到了VPS中，但仍保留了该域名。"
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "所以blognas单纯是一个历史遗留问题。"
       })
   }).then(function() {
       return botui.action.button({
           delay: 1500,
           action: [{
               text: "您未来有什么计划吗？",
               value: "next"
           }]
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "更多地关注时事、前沿和技术。"
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "更加爱家人、爱世界！"
       })
   }).then(function() {
       return botui.action.button({
           delay: 1500,
           action: [{
               text: "您是不是漏了什么没说呀？（暗示）",
               value: "next"
           }]
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "对对，光顾着说自己了 (～￣▽￣)～ "
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "祝您身体健康、心想事成、前程似锦喽！"
       })
   }).then(function() {
       return botui.action.button({
           delay: 1500,
           action: [{
               text: "谢谢哈！那么如何支持您的工作呢？妈妈教育我不能白嫖...",
               value: "next"
           }]
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "常来看看就是我最大的荣幸！"
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "点击下方的小猫咪可以捐赠苯苯~"
       })
   }).then(function(res) {
       return botui.message.bot({
           type: 'html',
           // loading: true,
           delay: 1500,
           content: '或者点击<a href="https://blognas.hwb0307.com/thankyou" data-wpel-link="external" title="<strong>捐赠鼓励</strong>" target="_blank" rel="nofollow external noopener noreferrer"><strong>捐赠鼓励</strong></a> (～￣▽￣)～'
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: '再次感谢！<br /><img src= "https://chevereto.hwb0307.com/images/2022/10/16/wallhaven-85x3v2.md.jpg" width="500">'
       })
   });
}
