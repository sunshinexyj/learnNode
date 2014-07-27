var express = require('express');
var markdown = require('markdown-js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    console.log(req.ip);
  res.render('index', { title: 'Express hahah' });
});

module.exports = router;
