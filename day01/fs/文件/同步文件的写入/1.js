"use strict";
/***
 * 同步文件的写入，后续的文件会覆盖前面的内容
 * @type {"fs"}
 */
const  fs=require("fs");
console.log("开始同步的写入");
var date=new Date().toLocaleString();
console.log(date);
fs.writeFileSync("./public/1.log",date)

console.log("结束同步的写入");
