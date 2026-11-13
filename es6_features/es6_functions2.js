//Enhnced object literals
let x1=66;
let x2="Indore";

let objNew={
  x1,x2,
  add(x,y){
    return x+y;
  }

}
console.log(objNew);
console.log(objNew.x1);
console.log(objNew.x2);
console.log(objNew.add(2,3));