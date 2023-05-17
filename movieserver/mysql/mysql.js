//连接数据库需要借助第三方模块
var mysql = require("mysql");

//创建连接
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "movie"
})

//连接
connection.connect();

//封装方法

//查找单一用户方法
function userSelect(req, res, data) {
    var sqls = "select * from user where username=?";
    connection.query(sqls, data.username, function(error, result) {
        if (error) throw error;
        //走到这里表示账号存在，判定密码
        if (result.length == 0) {
            //走到这里说明我么数据库中没有查到数据 所以我们这里表示账号不存在
            res.send({
                status: 200, //状态码
                code: 0, //关键量
                msg: "账号不存在" //提示信息
            })
        } else {
            //走到这里说明账号存在 我们需要继续判断密码是否正确
            if (data.password == result[0].password) {
                //进来表示密码正确
                res.send({
                    status: 200, //状态码
                    code: 1, //关键量
                    msg: "登录成功", //提示信息
                    data: result
                })
            } else {
                res.send({
                    status: 200, //状态码
                    code: 0, //关键量
                    msg: "密码错误" //提示信息
                })
            }
        }
    })
}

//添加用户信息
function userAdd(req, res, data) {
    var sqls = "insert into user(username,password,nickname,phone,sex) value (?,?,?,?,?)";
    connection.query(sqls, [data.username, data.password, data.nickname, data.phone, data.sex], function(error, result) {
        if (error) throw error;
        //走到这说明插入成功
        res.send({
            status: 200, //状态码
            code: 1, //关键量
            msg: "添加成功" //提示信息
        })
    })
}

//添加电影票
function piaoAdd(req, res, data) {
    var sqls = "insert into ticket(id,name) value (?,?)"
    connection.query(sqls, [data.id, data.name], function(error, result) {
        if (error) throw error;
        //走到这说明插入成功
        res.send({
            status: 200, //状态码
            code: 1, //关键量
            msg: "购票成功" //提示信息
        })
    })
}

//查询电影票
function piaoList(req, res) {
    //查询数据库
    //query第一参数写语句 后面参数写方法
    //回调函数第一个参数就是错误  第二个参数就是结果 数据库查到的结果
    connection.query('select * from ticket', function(error, result) {
        if (error) throw error;
        res.send({
            status: 200, //状态码
            code: 1, //关键量
            msg: "传参成功", //提示信息
            data: result
        })
    })
}

//删除电影票
function piaoDelete(req, res, data) {
    var sqls = "delete from ticket where id=?";
    connection.query(sqls, data.id, function(error, result) {
        if (error) throw error;
        res.send({
            status: 200, //状态码
            code: 1, //关键量
            msg: "删除成功" //提示信息
        })
    })
}

//导出
module.exports = {
    userAdd,
    userSelect,
    piaoAdd,
    piaoList,
    piaoDelete
}