const { resolveSoa } = require("dns");
const http=require("http");
const server=http.createServer((req,res)=>{
    //console.log(req.url);
    if (req.url=='/'){
        res.end('Hello from the other sides'); 
    }
    else if(req.url=='/about')
    {
        res.end('About us!');
    }
    else if(req.url=='/contact')
    {
        res.end('Contact us!');
    }
    else{
        res.writeHead(404,{"Content-type":
    "text/html"});
        res.end("<h1>404 page error.Page does not exist</h1>");
    }

});
server.listen(8000,"127.0.0.1",()=>{
    console.log('Listening to the port 8000');
});