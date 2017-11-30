"use strict";
/**异步的打开
 * fs.open(path,flags,[mode],callback)
 * path要打开文件的路径
 * flags 打开文件的方式 读写
 * mode 设置文件的模式， 读写执行 r wx 421
 * callback  回调
 *          err如果成功err=null
 *          fd被打开文件的标识,和定时器类似
 *
 *
 * */
const fs=require("fs");
fs.open("1.txt","r",function (err,fd) {
     if (err){
         throw  err;
         console.log("文件的打开失败")
     }
     else{
         console.log("文件打开成功");
         console.log(fd);//3
     }
 })
fs.open("1.txt","r",function (err,fd) {
    if (err){
        throw  err;
        console.log("文件的打开失败")
    }
    else{
        console.log("文件打开成功");
        console.log(fd);//4 文件打开的标识符
    }
})