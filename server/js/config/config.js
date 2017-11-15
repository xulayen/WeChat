const configuration = {
    /**
     * 网站端口号
     */
    port: 3000,
    /**
     * log4js配置项
     * @tyoe 日志类型
     * @filename 日志目录
     * @alwaysIncludePattern 是否总是包含占位符
     * @pattern 占位符类型
     * @category 日志类型
     * @encoding 文件编码
     */
    log4js: {
        type: "dateFile",
        filename: 'E:/AllLog/nodejs/logs/log',
        alwaysIncludePattern: true,
        pattern: "-yyyy-MM-dd.log",
        category: "log_date",
        encoding: 'utf-8'
    },
    engine: 'html'
};
module.exports = configuration;
