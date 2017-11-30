"use strict";
const fs=require("fs");
fs.rmdir("./file",function (err) {
    if (err){
        throw err
    }
    else {
        console.log("删除成功");
    }

})