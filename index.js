/**
 * Module dependencies.
 */
var express = require('express')
var path = require('path');

var app = express();       
//设置静态文件目录
app.use(express.static(path.join(__dirname, './static')));

app.get('/index', function (req, res, next) {        //主页面，可以添加更多页面
    res.sendfile('./static/index.html');
})

app.listen(3078);                                    //开启端口
console.log('start success http://localhost:3078/index');
