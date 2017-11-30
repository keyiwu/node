"use strict";
//同步文件的追加
const  fs=require("fs");
var date=new Date().toLocaleString();
console.log("开始追加文件到1.log中")
fs.appendFileSync("./public/1.log",date);
var str="你好";
fs.appendFileSync("./public/1.log",str);
console.log("追加结束");