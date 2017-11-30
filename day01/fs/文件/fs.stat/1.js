"use strict";
const fs=require("fs");
fs.stat("1.txt",function (err,stats) {
    if (err){
        throw err;
    }
    else {
        console.log(stats);//文件的详细信息
    }
})