"use strict";
const  mysql=require("mysql");
//创建连接池（提高效率）
var  pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"jd",
    port:3306,
    connectionLimit:10
})
//获取连接
pool.getConnection((err,conn)=>{
    if (err){throw err}
    else {
        //创建sql并发送sql
        var sql="update jd_user SET upwd=? where uid=?";
        conn.query(sql,["123",2],(err, result)=>{
            if (err){throw err}
            else{
                if (result.affectedRows>0){
                    console.log("更新成功");
                }
                else {
                    console.log("更新失败");
                }
            }
            conn.release();//归还连接


        } )

    }

})

//关闭
