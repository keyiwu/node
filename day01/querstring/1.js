"use strict";
/***
 * querystring 模块用于处理http中url中的查询字符串
 * var obj=qs.parse(str);把查询字符串解析为js对象
 * var str=qs.strinify(obj)把查询对象解析为js字符串
 *
 */
//加载原生的模块querystring
//功能 处理查询字符串
//qs.parse(str)
//qs.stringify(obj)js对象转为字符串
const qs=require("querystring");
var str="uname=tom&upwd=123&age=19";
//把客户肚腩传递给nodejs服务器的查询字符串解析为js对象
var obj=qs.parse(str);
console.log(obj);
var obj2={name:"强东",age:18};
console.log(qs.stringify(obj2));
