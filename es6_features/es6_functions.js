//-----------------------------Arrow functions------------------------------------------------------
const add0=function(a,b){
  return a+b;
}

const add=(a,b)=>{
  return a+b;
}

console.log("value of a+b using function is=",add0(1,2));
console.log("value of a+b using arrow function is=",add(3,4));

const showe=(e)=>{console.log(e)};
console.log(add(2,3));

const show2=(ans)=>{return ans};
console.log("Printing the value of a+b by passing in another function show2=",show2(add(2,3)));

const multi=(x,y)=>x*y;
console.log("Ans of multi(2,add(1,3))=",multi(2,add(1,3)));

//const greet=(name)=>"Hello "+ name;
const greet=(name)=>"Hello " + name;
console.log(greet("Rohan"));



//--------------------------------------------------Template Literals------------------------------------------------------
console.log("\n");
console.log("----------------------------Template Literals:------------------------------------------");
console.log("1st way:")
let id=20, name="Rohan Sharma", age="29 years";
console.log("Id=" + id + ", name=" + name + " , age="+ age);

console.log("2nd way:");
console.log(`id=${id}, name=${name}, age=${age}`);


//--------------------------------------------------Destructuring Assignment-------------------------------------------
//Destructuring for array
console.log("\n");
let udata=[1001, "Rajiv Sharama", "MTech", "Computer Science and Engineering"];
let [id1,name1,pg,stream]=udata;
console.log("Printing 1st way:");
console.log("User Information:");
console.log(id1);
console.log(name1);
console.log(pg);
console.log(stream);
console.log("\n");

let[id2,name2,pg2,stream2]=[1002,"Rahul Sharma","MBA", "Accounts"];
console.log("Printing using 2nd way:");
console.log(id2);
console.log(name2);
console.log(pg2);
console.log(stream2);

//Destructuring for object
console.log("Destructuring for object");
let obj={prodid:1001, prodname:"MI Node 6 pro", price:20000};
//let {prodid, prodname, price}=obj;
//Object destructure using name not by position
let {prodname, prodid, price}=obj;
console.log(prodid);
console.log(prodname);
console.log(price);


//--------------------------------------------Default Parameteres--------------------------------------------------------
const sum=(a=0,b=0)=>a+b;
console.log(sum(2,3));
console.log(sum(2));

const concat=(a="", b="")=> a+b;
console.log(concat("Ram","   sharma"));
console.log(concat("Ram"));

