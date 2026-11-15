//rest operator(...)
//----------------------------example1-----------------------------------
console.log("Example1");
let data=[1001,"Rajat Agrawal",21];
console.log(data);

data1=[1,10,"Indore",...data];
console.log(data);
console.log(data1);

data2=[1002, "Ram", 23];
console.log(data2);
data2.unshift(2,20,"Ujjain");
console.log(data2);
console.log("\n");

//----------------------------example2---------------------------------
console.log("Example 2");
function sum(...numbers){
  console.log(numbers);
  return numbers.reduce((acc,curr)=> acc+curr ,0);
}
console.log("sum=",sum(1,2,3));
console.log("\n");

//---------------------------------exapmle 3---------------------------------
console.log("Example 3");
let newData={id:2200, name:"Rajat Agrawal"};
console.log(newData);

newData={sno:22, empId:1234, ...newData};
console.log(newData);
console.log("\n");
//------------------------------------------------------------------------

console.log("spread Operator");
//Example 1
console.log("Example 1");

udata=[1001,"Rajat Agrawal", "Indore"];
console.log(udata);
udata=[...udata,"frontend Developer", "11 LPA"];
console.log(udata);
console.log("\n");

//---------------------------------example 2------------------------------------------
console.log("Example 2");
prodData={id:23232, name:"MI pro Max"};
console.log(prodData);

prodData={...prodData, price:45000, color:"black-silver"};
console.log(prodData);