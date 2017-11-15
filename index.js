/**
 * 加载模块
 * @type {*|exports}
 */
var express = require('express');
var http = require('http');
var app = express();
var path = require('path');


wx = require('jquery_wechat_sdk')

/**
 * 加载日志
 */
var logger = require('./server/js/log4js/logger');

/**
 *  加载ejs模块
 */
var ejs = require('ejs');

/**
 * 加载配置项
 */
var config = require('./server/js/config/config');

/**
 * 使用Express获取参数需要用到body-parser模块
 * @type {exports}
 */
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));


if (config.engine === 'html') {
    /**
     * 设置html模版
     */
    app.engine('.html', ejs.__express);
    app.set('view engine', 'html');
} else {
    /**
     * 设置ejs模版
     */
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
}

/**
 * 设置当前静态目录为网站根目录
 * */
app.use(express.static(__dirname));


/**
 * 启动网站，端口为3000的
 */
http.createServer(app).listen(config.port);
console.log('服务器启动……http://localhost:' + config.port +"| 站点根目录："+__dirname);
logger.info('【nodejs服务正常启动……】【url:http//localhost:' + config.port + '/】【站点根目录：'+__dirname+'】');
