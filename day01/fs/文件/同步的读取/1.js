"use strict";
//file system 模块提供对文件系统中文件/目录进行增删改查，读写的功能
/***
 * 同步（synchronize）的读取文件中的内容
 * nodejs 解析器  磁盘
 * 必须等待       工作
 * var data=fs.readFileSync(file)
 * 同步向文件追加内容
 * 异步的读取文件中的内容
 * 异步向文件写内容
 * @type {"fs"}
 */

// 1:加载文件模块public/1
const fs=require("fs");
// 2：同步的读取
var data=fs.readFileSync("./public/1");
// 3：可选项转化字符串
console.log(data.toString())



