"use strict";
const  http=require("http");
const fs=require("fs");
const url=require("url");
http.createServer().on(
    "request",(req,res)=>{
         // console.log("http协议的版本"+req.httpVersion);
         // console.log("请求的url： "+req.url);
         if (req.url=="/index.html"){
             fs.readFile("./public/reg.html",function (err,data) {
                 if (err){throw err}
                 res.end();

             })
         }

    })
.listen(8081)