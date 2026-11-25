//area of square
const areaofsquare=(side)=>{
  return side*side;
}

//area of reactangle
const areaOfRectangle=(length,breadth)=>{
  return length*breadth;
}

//area of parallelogram
const areaOfParallelogram=(base, height)=>{
  return base*height;
}

//area of trapezoid
const areaOfTrapezoid=(side1,side2,height)=>{
  return (side1+side2)*height*1/2;
}

//area of triangle
const areaOfTriangle=(base,height)=>{
  return base*height*1/2;
}

//area of circle
const areaOfCircle=(radius)=>{
  return 3.14*radius*radius;
}

//area of ellipse
const areaOfEllipse=(radius1, radius2)=>{
return 3.14*radius1*radius2;
}

//export function one file to another file
module.exports={areaofsquare,areaOfRectangle,areaOfParallelogram,areaOfTrapezoid,areaOfTriangle,areaOfCircle,areaOfEllipse};