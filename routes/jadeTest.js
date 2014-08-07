var express = require('express');
var markdown = require('markdown-js');
var path = require('path');
var debug = require('debug')('learnNode');
var fs=require("fs");

var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res) {
//    var html = markdown.makeHtml("[Java Eye](http://www.iteye.com/ \"Click\") ");
//    res.send(html)
//    res.end();
//});
//
//router.get('/md', function(req, res) {
//    res.render('index.md', {layout: false});
//});

router.get('/:title', function(req, res, next) {
    res.render(req.params.title);
//    console.log(app.get('views'));
//    debug(app.get('views')+'');

//    var filePath = path.normalize('./views/' + urlPath);
//    path.exists(filePath, function  (exists) {
//        if(!exists) {
////            console.log('jump 404');
//            next();
//        } else {
//            var content = fs.readFileSync(filePath, 'utf8');
//            //　这里将markdown转成html, 然后以参数形式输出
//            var html_content = markdown.parse(content);
//
//            res.render('blogs/show', {
//                title: " - Blogs"
//                , blog_content: html_content
//            });
//        }
//    });

//    var path = [
//        'blogs/',
//        req.params.title, '.md'
//    ].join('');
//
//    console.log(path)
//    res.render(path, {layout: false});
});



module.exports = router;
