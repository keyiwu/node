"use strict";

const  mysql=require("mysql");
var conn =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"jd",
    port:"3306"
});
var sql="DELETE FROM jd_user where uid=?";
conn.query(sql, [1],(err,result)=>{
    if (err){
        throw err;
    }
    else{
        if (result.affectedRows>0){
            console.log("删除成功");
        }
        else {
            console.log("删除失败")
        }
    }

})
conn.end();