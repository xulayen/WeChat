# WeChat帮助插件

## 站点安装


``` bash

$ git clone https://github.com/xulayen/WeChat.git & cd Wechat


$ npm install


$ npm start


```

## 站点执行


浏览器中打开 http://localhost:3000/index.html


## npm下载

``` bash

$ npm install jquery_wechat_sdk


```

## 使用

``` bash

$ var wx = require('jquery_wechat_sdk');

```


API使用文档：


```html   
 Created by xulayen on 2016/9/14.
 <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
 *******************初始化入口******************************************************************************************
 WeChart([object])            微信参数初始化，可直接$.WeChart进行初始化 [静态调用、实例调用]
 *******************微信初始化参数**************************************************************************************
 debug                        是否启用调试模式 [false]
 scanAuthUrl                  调取扫一扫的授权页面，必须是当前页面的绝对地址 [location.href]
 facid                        当前厂家 ['00446']
 typenum                      1、服务号 2、订阅号 ['1']
 api                          获取微信appid、timestamp、nonceStr、signature的api地址 ['']
 baseapi_                     微信基础api，默认全部启用 [true]
 hideOptionMenu               隐藏所有的微信操作按钮 [true]
 appId                        当前微信号的appId {local/server 获取} ['']
 timestamp                    当前微信号的timestamp {local/server 获取} ['']
 nonceStr                     当前微信号的nonceStr {local/server 获取} ['']
 signature                    当前微信号的signature {local/server 获取} ['']
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
 async                        是否异步 {true/false} [true]
 data                         数据入参 {object} [object]
 type                         提交方式 {POST/GET} [POST]
 ContentType                  内容编码类型 [application/x-www-form-urlencoded]
 cache                        设置为false将不会从浏览器缓存中加载请求信息 [true]
 ********************AJAX异步提交debugger状态下回调  *****************************************************************************
 callback_success             成功回调 Function(res)
 callback_error               失败回调 Function(res)
 callback_beforeSend          请求完成后调用的回调函数（请求成功或失败时均调用）
 callback_complete            发送请求前可以修改XMLHttpRequest对象的函数，例如添加自定义HTTP头。在beforeSend中如果返回false可以取消本次ajax请求
 ********************功能模块函数（除了Scan函数是实例函数，其他都是[静态/实例函数]）  ***********************************************
 Scan                         扫描 Function(res) @param res扫描到的内容，[实例调用]
 Forword                      转发 Function(success,cancel) @success转发成功回调 @cancel取消转发回调 [静态调用、实例调用]
 ForwordToFriend              获取“分享给朋友”按钮点击状态及自定义分享内容接口
 ShareQQ                      获取“分享到QQ”按钮点击状态及自定义分享内容接口
 ShareWeibo                   获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
 ShareQZone                   获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
 ChooseImg                    选择图片
 PreviewImage                 预览图片
 UploadImage                  上传图片
 GetNetWorkType               获取网络状态
 GetLocation                  获取地理位置
 OpenLocation                 打开地理位置
 HideOptionMenu               隐藏右上角菜单
 ShowOptionMenu               显示右上角菜单
 CloseWindow                  关闭页面
 InitWxError                  初始化失败 Function(res) 进行调用初始化微信参数是否异常 [静态调用、实例调用]
 callback_WeChatBrower        是否是微信浏览器[function () {
                              location.href = window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + opts.appId || '00000000';
                                }] [静态调用、实例调用]
```			
用法 API:
初始化微信基础信息

```js

var weChat=$.WeChart({
     api: config.api,
     type: 'GET',
     facid: config.facid,
     typenum: config.typenum,
     async: false
 });
 
WeChat.InitWeChat({
    分享到朋友圈: true,
    发送给朋友: true
});

//分享到朋友圈
wechatManage.Forword({
    forword_title: "标题",
    forword_desc: '描述',
    forword_link: '链接',
    forword_imgUrl: '图片地址'
});

//分享给朋友
wechatManage.ForwordToFriend({
    forword_title: "标题",
    forword_desc: '描述',
    forword_link: '链接',
    forword_imgUrl: '图片地址'
});
 
 当前页面可以转发
 $.Forword({},success,cancel) WeChat.Forword({},success,cancel)
 
 分享给朋友
 $.ForwordToFriend({},success,cancel) WeChat.ForwordToFriend({},success,cancel)
 
 分享到QQ
 $.ShareQQ({},success,cancel) WeChat.ShareQQ({},success,cancel)
 
 分享到微博
 $.ShareWeibo({},success,cancel) WeChat.ShareWeibo({},success,cancel)
 
 分享到QQ空间
 $.ShareQZone({},success,cancel) WeChat.ShareQZone({},success,cancel)
 
 分享给朋友
 $.ForwordToFriend({},success,cancel) WeChat.ForwordToFriend({},success,cancel)
 
 微信初始化失败回调
 $.InitWxError(fn) WeChat.InitWxError(fn)
 
 获取地理位置
 $.GetLocation(success) WeChat.GetLocation(success)
 
 获取网络状态
 $.GetNetWorkType(success) WeChat.GetNetWorkType(success)
 
 隐藏菜单
 $.HideOptionMenu() WeChat.HideOptionMenu()
 
 显示菜单
 $.ShowOptionMenu() WeChat.ShowOptionMenu()
 
 关闭页面
 $.CloseWindow() WeChat.CloseWindow()
 
 按钮5可以调取摄像头
 $("#btn5").Scan(success)
 
 按钮6可以调取摄像头
 $("#btn6").Scan(success);

```
https://xulayen.github.i


## 实现AMD CMD
```js

    ;(function(){
        function MyModule() {
            // ...
        }

        var moduleName = MyModule;
        if (typeof module !== 'undefined' && typeof exports === 'object') {
            module.exports = moduleName;
        } else if (typeof define === 'function' && (define.amd || define.cmd)) {
            define(function() { return moduleName; });
        } else {
            this.moduleName = moduleName;
        }
    }).call(function() {
        return this || (typeof window !== 'undefined' ? window : global);
    });




    ;
    (function (factory) {
        if (typeof define === "function" && define.amd) {
            // AMD模式
            define(["jquery"], factory);
        } else {
            // 全局模式
            factory(jQuery);
        }
    }(function ($) {
        //插件代码
    }));

```