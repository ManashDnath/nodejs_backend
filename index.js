console.log("hello woduy");

const http =require("http");


const server=http.createServer((req,res)=>{
  console.log("hello");
  const date=new Date().toLocaleDateString();
  const time=new Date().toLocaleTimeString();
  console.log(`Here is ${date} & ${time} hope`);
  res.end();
});

server.listen(8082,()=>{
  console.log("Listening two port 8082")
})