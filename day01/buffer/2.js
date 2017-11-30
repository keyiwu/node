"use strict";
/***
 * buf.write("要写入的字符串"，从Buffer对象的几位开始写入，写入的字符串的长度，写入的字符串的编码)
 */
var bf =new Buffer(5);
console.log(bf);
var str="web";
bf.write(str)
// bf.write(str,1,3)
console.log(bf)
/***
 * buf.toString()
 */
var buf2=new Buffer("web");
console.log(buf2.toString("utf-8",1,3));
var buf3=new  Buffer("中文");
console.log(buf3.toString("utf-8",1,2))
//buf.toJSON()
console.log(buf3.toJSON())
var buf4=new Buffer(10);
buf3.copy(buf4);
console.log(buf3)
console.log(buf4)
console.log(Buffer.isEncoding("utf-8"));
console.log(Buffer.isEncoding("gbk"));
var arr=[1,2,3];
var buf5=new Buffer(10);
console.log(Buffer.isBuffer(arr));
console.log(Buffer.isBuffer(buf5));