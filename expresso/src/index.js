const express=require("express");
const path=require("path");
const app=express();
const port=8000;

//console.log(__dirname);
//built in middleware
//app.use(express.static(staticPath));
//const staticPath=path.join(__dirname,'../public');

//app.use(express.static(staticPath));

//app.get("/",(req,res)=>{
    //res.send("Hello from the express");
//})

//app.get('/about',(req,res)=>{
   // res.send("Hello About Page");
//})

//builtinmiddleware
app.use(express.static(path));

app.get("/",(req,res)=>{
    res.send("Hello world.");

})




app.listen(port,()=>{
    console.log(`Listening the port at ${port}`);
});