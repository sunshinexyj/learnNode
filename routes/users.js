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

router.get('/:id', function  (req, res, next) {
    res.send('id:' + req.params.id+'\n');
    res.send('list all users \n');
//    res.end();
    next(res);
});


router.get('/*', function  (req, res, next) {
    console.log('list all user');
    res.send('list all users \n');
    res.end();
});

module.exports = router;
