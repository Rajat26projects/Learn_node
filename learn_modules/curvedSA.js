//CSA of cuboid
const CSAofCuboid=(length,breadth,height)=>{
  return 2*(length+breadth)*height;
}

//CSA of Cube
const CSAOfCube=(side)=>{
  return 4*side*side;
}

//CSA of Cylinder
const CSAOfCylinder=(radius,height)=>{
return 2*3.14*radius*height;
}

//CSA of cone
const CSAOfCone=(radius,sh)=>{
  return 3.14*radius*sh;
}

//CSA of Sphere
const CSAOfSphere=(radius)=>{
  return  4*3.14*radius*radius;
}

//CSA Of Hemisphere
const CSAOfHemisphere=(radius)=>{
  return 2*3.14*radius*radius;
}

module.exports={CSAofCuboid,CSAOfCube,CSAOfCylinder,CSAOfCone,CSAOfSphere,CSAOfHemisphere};