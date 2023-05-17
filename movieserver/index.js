//引入require
const express = require("express");

//生成实例化对象
var app = new express();

//引入数据库方法
var sql = require("./mysql/mysql")

//引入path
var path = require('path')

//登录请求
app.get("/login", function(req, res) {
    var data = req.query;
    sql.userSelect(req, res, data)
})

//注册请求
app.get("/register", function(req, res) {
    var data = req.query;
    sql.userAdd(req, res, data)
})

//添加电影票
app.get("/piao", function(req, res) {
    var data = req.query;
    sql.piaoAdd(req, res, data)
})

//查询电影票
app.get("/indent", function(req, res) {
    //传过去
    sql.piaoList(req, res)
})

//删除电影票
app.get("/delete", function(req, res) {
    var data = req.query;
    sql.piaoDelete(req, res, data)
})

//访问视频
app.get('/movie', function(req, res, next) {
    var id = req.query.id
    res.sendFile(path.join(__dirname, 'movies/' + id + '.mp4'));
})

//访问图片
app.get('/image', function(req, res, next) {
    var id = req.query.id
    res.sendFile(path.join(__dirname, 'images/' + id + '.png'));
})

//监听端口
app.listen(3000, function() {
    console.log("服务器跑起来了");
})