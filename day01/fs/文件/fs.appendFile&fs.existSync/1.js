"use strict";
//异步的将数据添加到尾部，如果不存在就会创建一个
/**
 * fs.appFile(filename,data,[option],callback)
 */
/**
 * 如何判断一个文件是否存在
 * fs.exists(path,callback)检查指定路径的文件或者目录是否存在
 */
const fs=require("fs");
// console.log(fs.existsSync("filename"));
if (fs.existsSync("filename" )){
    console.log("存在");
    fs.appendFile("filename","前端",function (err) {
                 if(err){
                     throw  err;
                 }else
                 {
                     console.log("文件写入成功")
                 }
    })
}
else{
console.log("不存在");
fs.writeFile("filename","web",function (err) {
    if (err){
        throw err;
    }
    else
    {
        console.log("文件创建成功");
    }
})

}

