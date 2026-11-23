//import http module
const http=require('http');
const PORT=7656;

//create server
const server=http.createServer((req,res)=>{
  if(req.method=="GET"){
    if(req.url=="/"){
      res.writeHead(200,{'content-type':"text/plain"});
      res.end('this is a home page ');
    }
    else if(req.url=="/about"){
      res.writeHead(200,{'content-type':"text/html"});
      res.end(`<h1 style="color:green;"> This is About page </h1>`);
    }
    else if(req.url=="/services"){
      res.writeHead(200,{'content-type':"text/JSON"});
      res.end('{code:200,message:"this is service page"');
    }
    else{
      res.writeHead(404,{'content-type':"text/html"});
      res.end(`<h1>404 page '${req.url} not found </h1>`);
    }
  }

  //---------------------POST Method------------------------------
  else if(req.method=="POST"){
    if(req.url=="/register"){
      // console.log(req);
      // res.writeHead(201,{'content-type':"text/html"});
      // res.end(`<h1>Data successfully added in our database </h1>:<br> ${req.body}`); 
      let body="";
req.on('data',chunk=>{
  body+=chunk.toString();
  console.log(body);
  const bdy=JSON.parse(body);
  const {username,password}=bdy;
  console.log(username);
  console.log(password);
});

req.on('end',()=>{
  res.writeHead(200,{"content-type":"application/JSON"});

  res.end(JSON.stringify({message:'Form data submitted',data:body}));
});
    }
  }

  //--------------------------PUT Method------------------------------
  else if(req.method=="PUT"){

  }

  //---------------------------PATCH Method---------------------------
  else if(req.method=="PATCH"){

  }

  //-------------------------------DELETE Method-----------------------
  else if(req.method=="DELETE"){

  }

  else{

  }
})

//call listen function to start server
//server.listen(port,uel,callback)
server.listen(PORT,'127.0.0.1',()=>{
  console.log(`Server is working on http://localhost:${PORT}`);
})