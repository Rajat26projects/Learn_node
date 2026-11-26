const login=(data)=>{
  if(data.userType=="customer" && data.password==1234){
    console.log('Welcome to customer dashboard');
  }
  else if(data.userType=="admin"){
console.log('Welcome to admin dashboard');
  }
  else if(data.userType=="vendor"){
    console.log('Welcome to the vendor dashboard');
  }
  else{
    console.log('Invalid usertype or password so pls try again');
  }
}

module.exports={login};