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
})

//call listen function to start server
//server.listen(port,uel,callback)
server.listen(PORT,'127.0.0.1',()=>{
  console.log(`Server is working on http://localhost:${PORT}`);
})