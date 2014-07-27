var express = require('express');
var markdown = require('markdown-js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
//  res.send('respond with a resource');
    var html = markdown.makeHtml("[Java Eye](http://www.iteye.com/ \"Click\") ");
    res.send(html)
    res.end();
});

module.exports = router;
