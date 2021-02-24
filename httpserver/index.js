const { resolveSoa } = require("dns");
const http=require("http");
const server=http.createServer((req,resp)=>{
    res.end('Hello from the other sides');

});
