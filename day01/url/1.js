"use strict";
const  url =require("url");
var u="http://www.jd.com:443/ad/index?uname=qiangdong&age=18";
// var obj=url.parse(u);
//true 指定我们对url中的查询字符串进行进一步解析
//解析查询字符串
var obj=url.parse(u,true);
console.log(obj.query.uname)