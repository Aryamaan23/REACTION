const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to home page.</h1>");
});


app.get('/about',(req,res)=>{
    res.write("<h1>Welcome to about page.</h1>");
    res.write("<h1>Welcome to about page.</h1>");
    res.send();
});

app.get('/contact',(req,res)=>{
    res.send("Welcome to contact page.");
});

app.get('/temp',(req,res)=>{
    res.send([{ // we can also use res.json
        id:1,
        name:"Aryamaan",
    },
    {
        id:2,
        name:"John",
    },
    {
        id:3,
        name:"Doe",
    },

]);
});


app.listen(3000,()=>{
    console.log("Listening to the port 3000");
});