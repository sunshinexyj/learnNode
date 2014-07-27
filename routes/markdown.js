var express = require('express');
var markdown = require('markdown-js');
var path = require('path');
var debug = require('debug')('learnNode');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var html = markdown.makeHtml("[Java Eye](http://www.iteye.com/ \"Click\") ");
    res.send(html)
    res.end();
});

router.get('/md', function(req, res) {
    res.render('index.md', {layout: false});
});

router.get('/blogs/:title.html', function(req, res, next) {
    var urlPath = [
        'blogs/',
        req.params.title, '.md'
    ].join('');

//    console.log(app.get('views'));
//    debug(app.get('views')+'');

    var filePath = path.normalize('./views/' + urlPath);
    path.exists(filePath, function  (exists) {
        if(!exists) {
            next();
        } else {
            res.render(urlPath, {layout: false});
        }
    });

//    var path = [
//        'blogs/',
//        req.params.title, '.md'
//    ].join('');
//
//    console.log(path)
//    res.render(path, {layout: false});
});



module.exports = router;
