"use strict";
const  fs=require("fs");
fs.open("./1.txt","r+",function (err,fd) {
     if(err){
         throw  err;
         console.log("打开文件失败");
     }
     else {
         /***
          * fs.write(fd,buffer,offset,length,position,callback)
          *
          *
          */
           // var buf=new Buffer("121321321");
           // fs.write(fd,buf,0,4,null,function () {
           //     console.log(arguments)
           // })
         fs.write(fd, "hello world",5,"utf-8",function (err,written,string) {
                 console.log(err)
                 console.log(written)//写入的字符串的数量
                 console.log(string)//写入的字符串
         }) ;
         fs.close(fd,function (err) {
             console.log(err)
         })


     }

})