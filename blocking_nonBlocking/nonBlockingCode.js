const fs=require('fs');
console.log("Process 1");
console.log("Process 2");
console.log("Process 3");
fs.readFile('./ujjain.txt',"utf-8",(error,data)=>{
  if(error){
    console.log("2.Non-blocking code error:",error);
  }else{
    console.log(data);
  }
})
console.log("Process 4");
console.log("Process 5");
console.log("Process 6");
console.log("Process 7");

fs.readFile('./script1.js',"utf-8",(error,data)=>{
  if(error){
    console.log("error:",error);
  }else{
    console.log(data);
  }
})

fs.readFile('./script2.js',"utf-8",(error,data)=>{
  if(error){
    console.log("error:",error);
  }else{
console.log(data);
  }
})