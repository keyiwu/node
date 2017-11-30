"use strict";
const  fs=require("fs");
//创建文件
var   src ="./public/4.css";
var des="./public/4.backup.css";
//读取文件
fs.readFile(src,function (err,data) {
    if (err){
        console.log(err)
    }
    else {
         console.log("异步的读取成功")
        fs.writeFile(des,data, function (err,data) {
            if(err) {
                console.log("一步的写入失败")

            }
            else{

                console.log("异步的写入成功");
            }

        })

    }
})