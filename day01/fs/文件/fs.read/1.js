"use strict";
/**
 * 读取文件 fs.read(fd,buffer,offset,Length,position)
 * fd  fs.open方法成功打开一个文件返回的编号
 * buffer Buffer对象
 * offset偏移量新的内容的添加到buffer中内容的长度
 * length 添加到buffer中内容的长度
 * position读取的文件中的起始位置
 * callback 回调函数
 *      err，buffer的长度，buffer对象
 *
 */
const fs=require("fs");
fs.open("1.txt","r",function (err,fd) {
    if (err){
        throw err;

    }
    else {
        //准备一个buf1
        var buf1=new Buffer("123456789");
        // console.log(buf1);
        fs.read(fd, buf1,0,4,null,function (err,len,newBf) {
            console.log(err);
            console.log(len)
            console.log(newBf)

            console.log(buf1)
        })

    }




})
