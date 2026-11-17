//import file sysytem module
const fsObj=require('fs'); //here fsObj is a core module obj of fs module
console.log("Process 1:");
console.log("Process 2:");
console.log("Process 3:");
console.log("Process 4:");
const filedata=fsObj.readFileSync('./indore.txt',"utf8");
console.log(filedata);
console.log("Process 5:");
console.log("Process 6:");
console.log("Process 7:");