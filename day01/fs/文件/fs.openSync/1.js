"use strict";
const  fs=require("fs");
var fd=fs.openSync("./1.txt","r");
console.log(fd)