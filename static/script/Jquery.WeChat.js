/**
 * Created by xulayen on 2016/9/14.
 */
;
(function ($, WX) {
    var WXAPIConfig = {
        debug: false,
        baseapi_checkJsApi: true,
        baseapi_onMenuShareTimeline: true,
        baseapi_onMenuShareAppMessage: true,
        baseapi_onMenuShareQQ: true,
        baseapi_onMenuShareWeibo: true,
        baseapi_hideMenuItems: true,
        baseapi_showMenuItems: true,
        baseapi_hideAllNonBaseMenuItem: true,
        baseapi_showAllNonBaseMenuItem: true,
        baseapi_hideOptionMenu: true,
        baseapi_showOptionMenu: true,
        baseapi_closeWindow: true,
        baseapi_scanQRCode: true,
        appId: null,
        timestamp: null,
        nonceStr: null,
        signature: null,
        menu_share_timeline: false, //'menuItem:share:timeline'
        menu_share_appMessage: false, //, 'menuItem:share:appMessage',
        menu_share_favorite: false, //, 'menuItem:favorite',
        menu_share_openWithSafari: false, //,'menuItem:openWithSafari',
        menu_share_email: false, //,'menuItem:share:email',
        menu_share_qq: false, //,'menuItem:share:qq',
        menu_share_QZone: false, //, 'menuItem:share:QZone',
        menu_share_weiboApp: false, //, 'menuItem:share:weiboApp',
        menu_share_copyUrl: false, //, 'menuItem:copyUrl',
        menu_share_setFont: false, //, 'menuItem:setFont',
        menu_share_readMode: false, //,'menuItem:readMode',
        menu_share_refresh: false, //,'menuItem:refresh',
        api: '',
        facid: '00446',
        typenum: '1',
        scanAuthUrl: location.href,
        hideOptionMenu: true,
        forword_title: '', // 分享标题
        forword_desc: '', // 分享描述
        forword_link: '', // 分享链接
        forword_imgUrl: '', // 分享图标
        forword_type: '', // 分享类型,music、video或link，不填默认为link
        forword_dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        callback_success: null,
        callback_error: null,
        async: true, //是否异步
        data: null,
        type: 'POST',
        ContentType: 'application/x-www-form-urlencoded',
        cache: true,
        callback_beforeSend: null,
        callback_complete: null,
        callback_WeChatBrower: function () {
            location.href = window.location.href = 'http://dm.zhsh.co/Helix/_public/notwechart/authorize.html'
        }
    }, opts = {};

    $.fn.WeChart = $.WeChart = WeChart;

    /**
     * @param a
     * @param b
     * @returns {d.init}
     */
    var d = function () {
        return new d.prototype.init();
    };

    d.prototype = {
        init: function () {
            return this;
        },
        error: function (a) {
            throw a;
        },
        lookDebug: function (a) {
            if (opts.debug) {
                alert(a);
                console.log(a);
            }
        },
        type: function (a) {
            return Object.prototype.toString.call(a);
        }
    };
    d.prototype.init.prototype = d.prototype;
    d = d();

    function WeChart(options) {
        var _self = this;
        opts = $.extend({}, WXAPIConfig, options);
        var configs = {
            main: function () {
                try {
                    console.log(opts);
                    configs.wxInit();
                } catch (e) {
                    d.error('config.main.wxInit error' + e.message);
                }
                return _self;
            },
            getWXParamter: function () {
                if (opts.api) {
                    $.ajax({
                        type: opts.type,
                        url: opts.api,
                        async: opts.async,
                        ContentType: opts.contentType,
                        cache: opts.cache,
                        data: opts.data || { "url": opts.scanAuthUrl, "typenum": opts.typenum, "facid": opts.facid },
                        success: function (result) {
                            d.lookDebug('Ajax success:' + JSON.stringify(result));
                            opts.callback_success && opts.callback_success.call(opts, result);
                        },
                        beforeSend: function (result) {
                            d.lookDebug('Ajax beforeSend:' + JSON.stringify(result));
                            opts.callback_beforeSend && opts.callback_beforeSend.call(opts, result);
                        },
                        complete: function (result) {
                            d.lookDebug('Ajax complete:' + JSON.stringify(result));
                            opts.callback_complete && opts.callback_complete.call(opts, result);
                        },
                        error: function (error) {
                            d.error('NetWork is busy!');
                            d.lookDebug('Ajax error:' + JSON.stringify(error));
                            opts.callback_error && opts.callback_error.call(opts, error);
                        }
                    });
                }
            },
            wxInit: function () {
                try {
                    configs.getWXParamter();
                    var jsApi = [], menuList = [];
                    if (opts.baseapi_checkJsApi) {
                        jsApi.push('checkJsApi');
                    }
                    if (opts.baseapi_onMenuShareTimeline) {
                        jsApi.push('onMenuShareTimeline');
                    }
                    if (opts.baseapi_onMenuShareAppMessage) {
                        jsApi.push('onMenuShareAppMessage');
                    }
                    if (opts.baseapi_onMenuShareQQ) {
                        jsApi.push('onMenuShareQQ');
                    }
                    if (opts.baseapi_onMenuShareWeibo) {
                        jsApi.push('onMenuShareWeibo');
                    }
                    if (opts.baseapi_hideMenuItems) {
                        jsApi.push('hideMenuItems');
                    }
                    if (opts.baseapi_showMenuItems) {
                        jsApi.push('showMenuItems');
                    }
                    if (opts.baseapi_hideAllNonBaseMenuItem) {
                        jsApi.push('hideAllNonBaseMenuItem');
                    }
                    if (opts.baseapi_showAllNonBaseMenuItem) {
                        jsApi.push('showAllNonBaseMenuItem');
                    }
                    if (opts.baseapi_hideOptionMenu) {
                        jsApi.push('hideOptionMenu');
                    }
                    if (opts.baseapi_showOptionMenu) {
                        jsApi.push('showOptionMenu');
                    }
                    if (opts.baseapi_closeWindow) {
                        jsApi.push('closeWindow');
                    }
                    if (opts.baseapi_scanQRCode) {
                        jsApi.push('scanQRCode');
                    }
                    if (opts.menu_share_timeline) {
                        menuList.push('menuItem:share:timeline');
                    }
                    if (opts.menu_share_appMessage) {
                        menuList.push('menuItem:share:appMessage');
                    }
                    if (opts.menu_share_favorite) {
                        menuList.push('menuItem:favorite');
                    }
                    if (opts.menu_share_openWithSafari) {
                        menuList.push('menuItem:openWithSafari');
                    }
                    if (opts.menu_share_email) {
                        menuList.push('menuItem:share:email');
                    }
                    if (opts.menu_share_qq) {
                        menuList.push('menuItem:share:qq');
                    }
                    if (opts.menu_share_QZone) {
                        menuList.push('menuItem:share:QZone');
                    }
                    if (opts.menu_share_weiboApp) {
                        menuList.push('menuItem:share:weiboApp');
                    }
                    if (opts.menu_share_copyUrl) {
                        menuList.push('menuItem:copyUrl');
                    }
                    if (opts.menu_share_setFont) {
                        menuList.push('menuItem:setFont');
                    }
                    if (opts.menu_share_readMode) {
                        menuList.push('menuItem:readMode');
                    }
                    if (opts.menu_share_refresh) {
                        menuList.push('menuItem:refresh');
                    }

                    WX.config({
                        debug: opts.debug,
                        appId: opts.appId,
                        timestamp: opts.timestamp,
                        nonceStr: opts.nonceStr,
                        signature: opts.signature,
                        jsApiList: jsApi
                    });
                    WX.ready(function () {
                        if (opts.hideOptionMenu) {
                            WX.hideOptionMenu();
                        }
                        WX.showMenuItems({ menuList: menuList });
                    });
                } catch (e) {
                    d.error('config.wxInit error' + e.message);
                    d.lookDebug('wxInit error:' + e.message);

                }
            }
        };
        return configs.main();
    };

    /**
     @param success 扫描成功回调函数 {Function}
     */
    $.fn.Scan = $.Scan = function (success) {
        var _self = this;
        try {
            WX.scanQRCode({
                needResult: 1, //
                success: function (res) {
                    var result = res.resultStr; //当needResult 为 1 时，扫码返回的结果
                    success && success.call(_self, result);
                }
            });
        } catch (e) {
            d.error('Scan error' + e.message);
            d.lookDebug('Scan error:' + e.message);
        }
        return _self;
    };

    /**
     * menu_share_timeline
     @param success 转发成功回调函数 {Function}
     @param cancel  取消转发回调函数 {Function}
     */
    $.fn.Forword = $.Forword = function (success, cancel) {
        var _self = this;
        try {
            WX.ready(function () {
                WX.onMenuShareTimeline({
                    title: opts.forword_title, // 分享标题
                    desc: opts.forword_desc, // 分享描述
                    link: opts.forword_link, // 分享链接
                    imgUrl: opts.forword_imgUrl, // 分享图标
                    type: opts.forword_type, // 分享类型,music、video或link，不填默认为link
                    dataUrl: opts.forword_dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
                    success: function (res) {
                        success && success.call(_self, res);
                    },
                    cancel: function (res) {
                        // 用户取消分享后执行的回调函数
                        cancel && cancel.call(_self, res);
                    }
                });
            });
        } catch (e) {
            d.error('Forword error' + e.message);
            d.lookDebug('Forword error:' + e.message);
        }
        return _self;
    };


    /**
     *分享给朋友
     * @param success
     * @param cancel
     * @returns {$.fn.ForwordToFriend}
     * @constructor
     */
    $.fn.ForwordToFriend = $.ForwordToFriend = function (success, cancel) {
        var _self = this;
        try {
            WX.ready(function () {
                WX.onMenuShareAppMessage({
                    title: opts.forword_title, // 分享标题
                    desc: opts.forword_desc, // 分享描述
                    link: opts.forword_link, // 分享链接
                    imgUrl: opts.forword_imgUrl, // 分享图标
                    type: opts.forword_type, // 分享类型,music、video或link，不填默认为link
                    dataUrl: opts.forword_dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
                    success: function (res) {
                        // 用户确认分享后执行的回调函数
                        success && success.call(_self, res);
                    },
                    cancel: function (res) {
                        // 用户取消分享后执行的回调函数
                        cancel && cancel.call(_self, res);
                    }
                });
            });
        } catch (e) {
            d.error('ForwordToFriend error' + e.message);
            d.lookDebug('ForwordToFriend error:' + e.message);
        }
        return _self;
    };


    /**
     * menu_share_qq
     * @param success
     * @param cancel
     * @returns {$.fn.ShareQQ}
     * @constructor
     */
    $.fn.ShareQQ = $.ShareQQ = function (success, cancel) {
        var _self = this;
        try {
            WX.ready(function () {
                WX.onMenuShareQQ({
                    title: opts.forword_title, // 分享标题
                    desc: opts.forword_desc, // 分享描述
                    link: opts.forword_link, // 分享链接
                    imgUrl: opts.forword_imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        success && success.call(_self, res);
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                        cancel && cancel.call(_self, res);
                    }
                });
            });
        } catch (e) {
            d.error('ShareQQ error' + e.message);
            d.lookDebug('ShareQQ error:' + e.message);
        }
        return _self;
    };


    /**
     * 分享到微博
     * @param success
     * @param cancel
     * @returns {$.fn.ShareWeibo}
     * @constructor
     */
    $.fn.ShareWeibo = $.ShareWeibo = function (success, cancel) {
        var _self = this;
        try {
            WX.ready(function () {
                WX.onMenuShareWeibo({
                    title: opts.forword_title, // 分享标题
                    desc: opts.forword_desc, // 分享描述
                    link: opts.forword_link, // 分享链接
                    imgUrl: opts.forword_imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        success && success.call(_self, res);
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                        cancel && cancel.call(_self, res);
                    }
                });
            });
        } catch (e) {
            d.error('ShareWeibo error' + e.message);
            d.lookDebug('ShareWeibo error:' + e.message);
        }
        return _self;
    };


    /**
     * menu_share_QZone
     * @param success
     * @param cancel
     * @returns {$.fn.ShareQZone}
     * @constructor
     */
    $.fn.ShareQZone = $.ShareQZone = function (success, cancel) {
        var _self = this;
        try {
            WX.ready(function () {
                WX.onMenuShareQZone({
                    title: opts.forword_title, // 分享标题
                    desc: opts.forword_desc, // 分享描述
                    link: opts.forword_link, // 分享链接
                    imgUrl: opts.forword_imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        success && success.call(_self, res);
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                        cancel && cancel.call(_self, res);
                    }
                });
            });
        } catch (e) {
            d.error('ShareQZone error' + e.message);
            d.lookDebug('ShareQZone error:' + e.message);
        }
        return _self;
    };


    /**
     * 选择图片
     * @param success
     * @returns {$.fn.ChooseImg}
     * @constructor
     */
    $.fn.ChooseImg = $.ChooseImg = function (success) {
        var _self = this;
        try {
            WX.ready(function () {
                WX.chooseImage({
                    count: 9, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function (res) {
                        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                        opts.imgLocalIds = localIds;
                        success && success.call(_self, res, localIds);
                    }
                });
            });
        } catch (e) {
            d.error('ChooseImg error' + e.message);
            d.lookDebug('ChooseImg error:' + e.message);
        }
        return _self;
    };

    /**
     * 预览图片
     * @returns {$.fn.PreviewImage}
     * @constructor
     */
    $.fn.PreviewImage = $.PreviewImage = function (previewCurrentImg, previewUrls) {
        var _self = this;
        try {
            WX.ready(function () {
                WX.previewImage({
                    current: previewCurrentImg, // 当前显示图片的http链接
                    urls: previewUrls // 需要预览的图片http链接列表 []
                });
            });
        } catch (e) {
            d.error('PreviewImage error' + e.message);
            d.lookDebug('PreviewImage error:' + e.message);
        }
        return _self;
    };


    /**
     * 上传图片接口
     * @returns {$.fn.UploadImage}
     * @constructor
     */
    $.fn.UploadImage = $.UploadImage = function (success) {
        var _self = this;
        try {
            WX.ready(function () {
                WX.uploadImage({
                    localId: opts.imgLocalIds, // 需要上传的图片的本地ID，由chooseImage接口获得
                    isShowProgressTips: 1, // 默认为1，显示进度提示
                    success: function (res) {
                        var serverId = res.serverId; // 返回图片的服务器端ID
                        success && success.call(_self, res, serverId);
                    }
                });
            });
        } catch (e) {
            d.error('UploadImage error' + e.message);
            d.lookDebug('UploadImage error:' + e.message);
        }
        return _self;
    };


    /**
     * 获取网络状态
     * @type {Function}
     */
    $.fn.GetNetWorkType = $.GetNetWorkType = function (success) {
        var _self = this;
        try {
            WX.ready(function () {
                WX.getNetworkType({
                    success: function (res) {
                        var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
                        success && success.call(_self, res, networkType);
                    }
                });
            });
        } catch (e) {
            d.error('GetNetWorkType error' + e.message);
            d.lookDebug('GetNetWorkType error:' + e.message);
        }
        return _self;
    };


    /**
     * 获取地理位置
     * @type {Function}
     */
    $.fn.GetLocation = $.GetLocation = function (success) {
        var _self = this;
        try {
            WX.ready(function () {
                WX.getLocation({
                    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                    success: function (res) {
                        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                        var speed = res.speed; // 速度，以米/每秒计
                        var accuracy = res.accuracy; // 位置精度
                        success && success.call(_self, res, latitude, longitude, speed, accuracy);
                    }
                });
            });
        } catch (e) {
            d.error('GetLocation error' + e.message);
            d.lookDebug('GetLocation error:' + e.message);
        }
        return _self;
    };


    /**
     * 打开地图
     * @type {Function}
     */
    $.fn.OpenLocation = $.OpenLocation = function (res) {
        var _self = this;
        try {
            WX.ready(function () {
                WX.openLocation({
                    latitude: res.latitude, // 纬度，浮点数，范围为90 ~ -90
                    longitude: res.longitude, // 经度，浮点数，范围为180 ~ -180。
                    name: res.name || '', // 位置名
                    address: res.address || '', // 地址详情说明
                    scale: res.scale || 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
                    infoUrl: res.infoUrl || '' // 在查看位置界面底部显示的超链接,可点击跳转
                });
            });
        } catch (e) {
            d.error('OpenLocation error' + e.message);
            d.lookDebug('OpenLocation error:' + e.message);
        }
        return _self;
    };

    /**
     * 隐藏右上角菜单接口
     * @type {Function}
     */
    $.fn.HideOptionMenu = $.HideOptionMenu = function () {
        var _self = this;
        try {
            WX.ready(function () {
                WX.hideOptionMenu();
            });
        } catch (e) {
            d.error('HideOptionMenu error' + e.message);
            d.lookDebug('HideOptionMenu error:' + e.message);
        }
        return _self;
    };


    /**
     * 显示右上角按钮
     * @type {Function}
     */
    $.fn.ShowOptionMenu = $.ShowOptionMenu = function () {
        var _self = this;
        try {
            WX.ready(function () {
                WX.showOptionMenu();
            });
        } catch (e) {
            d.error('ShowOptionMenu error' + e.message);
            d.lookDebug('ShowOptionMenu error:' + e.message);
        }
        return _self;
    };

    /**
     * 关闭当前网页窗口接口
     * @type {Function}
     */
    $.fn.CloseWindow = $.CloseWindow = function () {
        var _self = this;
        try {
            WX.ready(function () {
                WX.closeWindow();
            });
        } catch (e) {
            d.error('CloseWindow error' + e.message);
            d.lookDebug('CloseWindow error:' + e.message);
        }
        return _self;
    };

    /**
     * 微信初始化失败回调函数
     * @type {Function}
     */
    $.fn.InitWxError = $.InitWxError = function (callback) {
        var _self = this;
        WX.error(function (res) {
            callback && callback.call(_self, res);
        });
        return _self;
    };

    /**
     * 是否是微信浏览器
     * @type {Function}
     */
    $.fn.IsWeChatBrower = $.IsWeChatBrower = function (callback) {
        var ua = window.navigator.userAgent.toLowerCase();
        var _self = this;
        if (!callback) {
            if (!opts.callback_WeChatBrower) {
                d.error('请先初始化参数IsWeChatBrower函数的回调函数callback_WeChatBrower!');
                return;
            }
            callback = opts.callback_WeChatBrower;
            if (ua.match(/micromessenger/i) != 'micromessenger') {
                callback && callback.call(_self, ua.match(/micromessenger/i) == 'micromessenger');
            }
        } else {
            callback && callback.call(_self, ua.match(/micromessenger/i) == 'micromessenger');
        }
        return _self;
    };
})(jQuery, wx);