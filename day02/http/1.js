"use strict";
//引用http模块
const  http=require("http");
//创建服务器
http.createServer().on(

 "request",function (req,res) {
    //设置响应消息的头部格式
     res.setHeader("Content-Type","text/html;charset=utf-8");
     res.write("本网站升级中，请稍后访问");
     //结束发送请求
     res.end();

    }



).listen("8080","localhost")
