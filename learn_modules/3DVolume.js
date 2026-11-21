//volume of cuboid
const volumeOfCuboid=(length,breadth,height)=>{
  return length*breadth*height;
}

//volume of cube
const volumeOfCube=(side)=>{
  return side*side*side;
}

//volume of cylinder
const volumeOfCylinder=(radius,height)=>{
  return 3.14*radius*radius*height;
}

//volume of cone
const volumeOfCone=(radius,height)=>{
  return 3.14*1/3*radius*radius*height;
}

//volume of sphere
const volumeOfsphere=(radius)=>{
  return 4/3*3.14*radius*radius*radius;
}

//volume of Hemisphere
const volumeOfHemisphere=(radius)=>{
  return 2/3*3.14*radius*radius*radius;
}

module.exports={volumeOfCuboid,volumeOfCube,volumeOfCylinder,volumeOfCone,volumeOfsphere,volumeOfHemisphere};
