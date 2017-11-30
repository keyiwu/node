"use strict";
var buf=Buffer.alloc(1024);//创建一个缓存区分配大小1024个字节
console.log(buf);
console.log(buf.length);
//创建一个数组初始化缓冲区
var  buf1=Buffer.from([1,2,3]);
console.log(buf1);
//创建一个字符串初始化的缓存区
var buf4=Buffer.from("abcd");
console.log(buf4);
//使用汉字“一二三”创建一个缓冲区
var buf5=Buffer.from("一二三");
console.log(buf5.length)//缓存区的大小
console.log(buf5);
console.log(buf5.toString());