"use strict";
//复制图片文件：1.gif 保存到public目录下
//读取文件的内容
const fs=require("fs");
var data=fs.readFileSync("./1.gif");
console.log(fs.writeFileSync("./public/1.gif",data));


