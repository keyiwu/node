"use strict";
const  fs=require("fs");
fs.readdir("./file",function (err,files) {
    if (err){
    throw  err;
    }
    else {
        files.forEach(function (f) {
            console.log(f)
            fs.stat("./file/"+f,function (err,stats) {
                if (err){
                    throw err;
                }else {
                    console.log(stats);
                    if (stats.mode==33206){
                        console.log("[文件]"+f);
                    }
                    else  if (stats.mode==16822){
                        console.log("[文件夹]"+f);
                    }
                    else{
                        console.log("[其他类型]"+f);
                    }
                }

            })
        })
    }
})