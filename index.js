console.log("hello woduy");

const http =require("http");


const server=http.createServer((req,res)=>{
  console.log("hello");
  const date=new Date().toLocaleDateString();
  const time=new Date().toLocaleTimeString();
  console.log(`Here is ${date} & ${time} hope`);
  const obj={
    server:"crio server",
    version:"1.0",
    date,
    time,
    status:200
  }

  res.writeHead(200,{"content-Type":"application/json"});
  res.write(JSON.stringify(obj))
  res.end();
});

server.listen(8082,()=>{
  console.log("Listening two port 8082")
})