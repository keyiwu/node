/**
 * buffer 一旦固定了长度，就不能改变
 * @type {Buffer}
 */
let   buf =new Buffer(2);
console.log(buf);
buf[1]=12;
console.log(buf)
//string 转为二进制必须指定编码方式
let buffer=new Buffer("web","utf-8");
console.log(buffer);
console.log(buffer.length);
var str1="中文";
console.log(str1.length);
let buf1=new Buffer("中文");

console.log(buf1.length)