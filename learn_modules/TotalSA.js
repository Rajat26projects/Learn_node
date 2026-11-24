//TSA Of cuboid
const TSAOfCuboid=(length,breadth,height)=>{
  return 2*(length*breadth+breadth*height+length*height);
}

//TSA of cube
const TSAOfCube=(side)=>{
  return 6*side*side;
}

//TSA Of Cylinder
const TSAOfCylinder=(radius,height)=>{
  return 2*3.14*radius*(radius+height);
}

//TSA oF cone
const TSAOfCone=(radius,sh)=>{
  return 3.14*radius*sh*(radius+sh);
}

//TSA Of Sphere
const TSAOfSphere=(radius)=>{
  return 4*3.14*radius*radius;
}

//TSA Of Hemisphere
const TSAOfHemisphere=(radius)=>{
  return 3*3.14*radius*radius;
}
module.exports={TSAOfCuboid,TSAOfCube,TSAOfCylinder,TSAOfCone,TSAOfSphere,TSAOfHemisphere};