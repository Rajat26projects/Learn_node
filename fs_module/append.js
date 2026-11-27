const fs=require('fs');
const path=require('path');

const filepath=path.join(__dirname,"data.txt");

// fs.appendFile("file name","conmtent","callBack function");
setTimeout(()=>{console.log("test")},10000)

fs.appendFile(filepath,"\n adding new data using append.js", (err)=>{
  if(err){
    console.log("Error Occured");
    console.log("\n");
    console.log(err);
  }else{
    console.log("Data added Successfully");
  }
});