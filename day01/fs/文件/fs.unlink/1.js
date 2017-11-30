"use strict";
const  fs=require("fs");
fs.unlink("./shan",function (err) {
    if (err){
        console.log("删除失败");
        throw  err;

    }
})