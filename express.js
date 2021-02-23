var express=require('express');

var app=express();

app.set('view engine','ejs');
app.use('/assets',function(req,res,next){

});

app.get('/',function(req,res){
        res.sendFile(__dirname+'/index.htm');
});

app.get('/vo',function(req,res){
    res.sendFile(__dirname+'/contact.htm');
});

app.get('/con',function(req,res){
    res.send('This is a contactpage');
});

app.get('/profile/:name',function(req,res){
    //res.send('You requested to see a profile with the id of ' + req.params.id);
    var data={age:29, job:'ninja',hobbies: ['eating','fighting','fishing']};
    res.render('profile',{person:req.params.name,data: data});
});

app.listen(3000,function(){
    console.log("Node server is running");
});