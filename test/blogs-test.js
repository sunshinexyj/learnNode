var vows = require('vows');
var apiEasy = require('api-easy');
var assert = require('assert');

var suit = apiEasy.describe("/markdown/blogs/*.html")

suit.discuss('when vists the markdown blog,')
    .use('localhost', 3000)
    .setHeader('Content-Type', 'text/html; charset=utf-8')
    .path('/markdown/blogs/')

    .discuss('if the markdown file is exists')
    .get('text.html')
    .expect(200)

    .undiscuss()
    .discuss('if the markdown file is not exists')
    .get('unknow.html')
    .expect(404)

    .export(module);