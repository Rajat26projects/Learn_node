//import twoDarea.js
const tda=require('./twoDarea');

//import 3d volumes
//1stway
const {volumeOfCuboid}=require('./3DVolume');
const {volumeOfCube,volumeOfCylinder,volumeOfCone,volumeOfsphere,volumeOfHemisphere}=require('./3DVolume');

//import userLogin
const {login}=require('./user');

//import CSA file
const csa=require('./curvedSA');

//import TSA file
const tsa=require('./TotalSA');

console.log("--------------------------Area of 2D Shapes--------------------------------------------");
console.log("Area of Square of side 4=",tda.areaofsquare(4));
console.log("Area of reactangle with l=3 & b=4 is=",tda.areaOfRectangle(3,4));
console.log("Area of Parallelogram with base=5 & height=6 is=",tda.areaOfParallelogram(5,6));
console.log("Area of Trapezoid with s1=8 & s2=6 & h=3 is=",tda.areaOfTrapezoid(8,6,3));
console.log("Area of triangle with l=3 & b=9 is=",tda.areaOfTriangle(3,9));
console.log("Area of circle with radius=2 is=",tda.areaOfCircle(2));
console.log("Area of Ellipse with a=10 and b=5 is=",tda.areaOfEllipse(10,5));
console.log("\n");


console.log("-------------------------Volume 0f 3D Shapes------------------------------------------");
console.log("Volume of cuboid with l=3 b=2 h=4 is=",volumeOfCuboid(2,3,4));
console.log("Volume of cube with side=5 is=",volumeOfCube(5));
console.log("Volume of cylinder with r=2 and h=3  is=",volumeOfCylinder(2,3));
console.log("Volume of cone with r=2 and h=5 is=",volumeOfCone(2,5));
console.log("Volume of sphere with r=2 is=",volumeOfsphere(2));
console.log("Volume of Hemisphere with r=2 is=",volumeOfHemisphere(2));
console.log("\n");

console.log("-------------------------UserInfo---------------------------------------------------------")
login({userType:"customer", password:1234});
login({userType:"customer", password:123});
login({userType:"vendor"});
login({userType:"admin"});
console.log("\n");

console.log("--------------------------------Curved Surface Area---------------------------------------");
console.log("CSA of Cuboid with l=2 b=3 h=4 is=",csa.CSAofCuboid(2,3,4));
console.log("CSA of Cube with side=5 is=",csa.CSAOfCube(5));
console.log("CSA oF Cylinder with r=2 and h=3 is=",csa.CSAOfCylinder(2,3));
console.log("CSA of Cone with r=2 and h=3 is=",csa.CSAOfCone(2,3));
console.log("CSA Of Sphere with r=2 is=",csa.CSAOfSphere(2));
console.log("CSA Of Hemisphere with r=10 is=",csa.CSAOfHemisphere(10));
console.log("\n");


console.log("-----------------------------------------Total Surface Area---------------------------------");
console.log("TSA Of Cuboid with l=2, b=3, h=4 is=",tsa.TSAOfCuboid(2,3,4));
console.log("TSA Of Cone with side s=3 is=",tsa.TSAOfCube(3));
console.log("TSA Of Cylinder with r=2 and h=3 is=",tsa.TSAOfCylinder(2,3));
console.log("TSA Of Cone with radius=2 and sh=3 is=",tsa.TSAOfCone(2,3));
console.log("TSA of Sphere with r=2",tsa.TSAOfSphere(2));
console.log("TSA Of Hemisphere with r=3 is",tsa.TSAOfHemisphere(3));
