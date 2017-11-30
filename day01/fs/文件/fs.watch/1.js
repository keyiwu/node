"use strict";
//文件监测 有bug 需要解决
const  fs=require("fs");
fs.watch("1.txt",function (event,filename) {
    console.log(event);
    console.log(arguments)

})