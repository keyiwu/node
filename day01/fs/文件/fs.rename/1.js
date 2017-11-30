"use strict";
const fs=require("fs");
//文件的重命名
fs.rename("1.txt","1.new.txt",function (err) {
    if (err){
        throw err;
    }
    else
    {
        console.log("重命名成功");
    }
})
