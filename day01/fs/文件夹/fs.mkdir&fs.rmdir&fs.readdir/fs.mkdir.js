"use strict";
const  fs=require("fs");
fs.mkdir("./file",function (err) {
    if (err){
        throw  err;
    }
    else{
        console.log("文件夹创建成功");
    }
})