var logger = require('../log4js/logger');


module.exports = function (app) {
    
    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/index', function (req, res) {
        res.render('index');
    });

    app.get('/Security', function (req, res) {
        res.render('Security');
    });

    app.post('/Search', function (req, res) {
        logger.info('Funciton:Search【keyword:'+ req.body.keyword +'】');
        res.render('index',{"result":"search result"});
    });

};
