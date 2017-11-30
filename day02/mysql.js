"use strict";
//检查数据库是否正常启动
//加载mysql模块
const mysql =require("mysql");
//创建连接对象
var conn=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"jd",
    port:"3306"
})
//创建sql语句并且发送sql
// var sql ="INSERT INTO jd_user VALUES(null,'tom','123')";
// conn.query(sql, (err,result)=>{
//     if (result.affectedRows>=1){
//         console.log("添加成功");
//     }
//     else  {
//         console.log("添加失败");
//     }
// console.log(result);
//
// })
//使用占位符解决安全问题
var sql ="INSERT INTO jd_user VALUES(null,?,?)";
conn.query(sql,["tom3","1"],function (err,result) {
    if (err){
        throw  err;
    }
    else
    {
         if (result.affectedRows>0){
             console.log("添加成功");
         }
         else{
             console.log("添加失败");
         }

    }

})


//关闭连接
conn.end();
