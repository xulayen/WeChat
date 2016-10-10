# WeChat
```html   
Created by xulayen on 2016914.
<script src="http:res.wx.qq.comopenjsjweixin-1.0.0.js"><script>
<script src="http:ajax.googleapis.comajaxlibsjquery1.5.2jquery.min.js"><script>

debug                        是否启用调试模式 [false]
scanAuthUrl                  调取扫一扫的授权页面，必须是当前页面的绝对地址 ['']
facid                        当前厂家 ['00446']
typenum                      1、服务号 2、订阅号 ['1']
api                          获取微信appid、timestamp、nonceStr、signature的api地址 ['']
baseapi_                     微信基础api，默认全部启用 [true]
hideOptionMenu               隐藏所有的微信操作按钮 [true]
appId                        当前微信号的appId {localserver 获取} ['']
timestamp                    当前微信号的timestamp {localserver 获取} ['']
nonceStr                     当前微信号的nonceStr {localserver 获取} ['']
signature                    当前微信号的signature {localserver 获取} ['']
分享到朋友圈                 分享到朋友圈 [false]
发送给朋友                   发送给朋友 [false]
收藏                         收藏 [false]
在Safari中打开               在Safari中打开 [false]
邮件                         邮件 [false]
分享到QQ                     分享到QQ [false]
分享到QQ空间                 分享到QQ空间 [false]
分享到Weibo                  分享到Weibo  [false]
复制链接                     复制链接 [false]
调整字体                     调整字体 [false]
阅读模式                     阅读模式 [false]
刷新                         刷新 [false]
forword_title                分享标题 ['']
forword_desc                 分享描述 ['']
forword_link                 分享链接 ['']
forword_imgUrl               分享图标 ['']
forword_type                 分享类型{music、video、link} [link]
forword_dataUrl              如果type={music或video}，则要提供数据链接 ['']
WeChart([object])            微信参数初始化，可直接$.WeChart进行初始化 [静态调用、实例调用]
Scan                         扫描 Function(res) @param res扫描到的内容，[实例调用]
Forword                      转发 Function(success,cancel) @success转发成功回调 @cancel取消转发回调 [静态调用、实例调用]
InitWxError                  初始化失败 Function(res) 进行调用初始化微信参数是否异常 [静态调用、实例调用]
callback_success             成功回调 Function(res)
callback_error               失败回调 Function(res)
async                        是否异步 {truefalse} [true]
data                         数据入参 {object} [object]
type                         提交方式 {POSTGET} [POST]
ContentType                  内容编码类型 [applicationx-www-form-urlencoded]
cache                        设置为false将不会从浏览器缓存中加载请求信息 [true]
callback_beforeSend          请求完成后调用的回调函数（请求成功或失败时均调用）
callback_complete            发送请求前可以修改XMLHttpRequest对象的函数，例如添加自定义HTTP头。在beforeSend中如果返回false可以取消本次ajax请求
callback_WeChatBrower        是否是微信浏览器[function () {
		       location.href = window.location.href = 'https:open.weixin.qq.comconnectoauth2authorize?appid=' + opts.appId || '00000000';
			 }] [静态调用、实例调用]
```			
用法 API:
初始化微信基础信息

```js
$.WeChart({
api: 'http:127.0.0.1:8544WechartWeChat.asmxGetWeChatParamters',
callback_success: function (result) {
var data = JSON.parse(result.children[0].innerHTML);
this.appId = data.APPID;
this.timestamp = data.TIMESTAMP;
this.nonceStr = data.NONCESTR;
this.signature = data.SIGNATURE;
},
scanAuthUrl: "http:152l8u0817.51mypc.cnjtwechartindex.html",
typenum: 2,
facid: 10,
分享到朋友圈: true,
forword_title: 'cccccccccccccccc',
forword_link: 'http:www.baidu.com'
});

当前页面可以转发
$.Forword();

微信初始化失败回调
$.InitWxError(function (res) {
    alert('初始化失败！')
});

按钮5可以调取摄像头
$("#btn5").Scan();

按钮6可以调取摄像头
$("#btn6").Scan();

```
https://xulayen.github.io/WeChatindex.html
 
