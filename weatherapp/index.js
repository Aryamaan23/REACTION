const http=require("http");
const fs=require("fs");
var requests=require("requests");

const homeFile=fs.readFileSync("home.htm","utf-8");

const replaceVal= (tempVal,orgVal) =>{
    let temperature=tempVal.replace("{%tempval%}",orgVal.wind.deg);
    temperature=temperature.replace("{%tempmin%}",orgVal.main.temp_min);
    temperature=temperature.replace("{%tempmax%}",orgVal.main.temp_max);
    temperature=temperature.replace("{%location%}",orgVal.name);
    temperature=temperature.replace("{%country%}",orgVal.sys.country);
    temperature=temperature.replace("{%tempstatus%}",orgVal.weather[0].main);
    return temperature;


}
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        requests("http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=69ebc5c63d22c82928f80283efa32703")
        .on('data', (chunk) =>{
            const objeData=JSON.parse(chunk);
            const arrData=[objeData];
            const realTimeData=arrData.map((val)=>
                //console.log(val.main);
                replaceVal(homeFile,val)).join("");
                res.write(realTimeData);
            
                            
          //console.log(arrData[0].main.temp);
         })
        .on('end', (err)=> {
         if (err) return console.log('connection closed due to errors', err);
 
          res.end();
        });

    }

});

server.listen(8000,"127.0.0.1");
