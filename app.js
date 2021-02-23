//var time=0
//var timer=setInterval(function(){
   // time+=2
   // console.log(time +'seconds have passed');
    //if (time>5){
     //   clearInterval(timer);
    //}
//},2000);

//console.log(__dirname);
//console.log(__filename);

//normal function statement
//function sayHi(){
  //  console.log("hi");
//}
//sayHi();

//function expression
//var sayBye=function(){
  //  console.log('bye');
//};
//sayBye();

//function callFunction(fun){
  //  fun();
//}

//callFunction(sayBye);
//var stuff=require('./stuff');
//console.log(stuff.counter(['shaun','crystal','ryu']));
//console.log(stuff.adder(5,6));
//console.log(stuff.adder(stuff.pi,5));

//var events=require('events');

//var util=require('util');

//var Person=function(name){
 //   this.name=name;
//}

//util.inherits(Person,events.EventEmitter);
//var james=new Person('james');
//var mary=new Person('mary');
//var ryu=new Person('ryu');
//var people=[james,mary,ryu];

//people.forEach(function(person){
      // person.on('speak',function(msg){
         //  console.log(person.name + ' said: ' +msg);
    //   });
//});


//james.emit('speak','hey dudes');



//fs.readFile('readme.txt','utf8',function(err,data){
   //fs.writeFile('writeme.txt',data);
//});


//console.log(readme);
//fs.writeFileSync('writeme.txt',readme);
//code
const { resolveSoa } = require('dns');
var fs= require('fs');
/*fs.unlink('writeme.txt', (err) => { 
    if (err) { 
      console.log(err); 
    } 
  });*/

//fs.mkdirSync('stuff');//Adding the directories
//fs.rmdirSync('stuff');//Removing the directories

/*fs.mkdir('stuff',function(){
   fs.readFile('readme.txt','utf8',function(err,data){
       fs.writeFile('./stuff/writeme.txt',data,function(err){
           if(err)
           {
               console.log(err);
           }
       });

   });
});*/
/*fs.unlink('./stuff/writeme.txt',(err)=>{
    if(err)
    {
        console.log(err);
    }
});
fs.rmdir('stuff',(err)=>{
    if(err)
    {
        console.log(err);
    }
});*/

var fs=require('fs');


/*myReadStream.on('data',function(chunk){
    console.log('New chunk received');
    myWriteStream.write(chunk);
    //console.log(chunk);
});*/




var http=require('http');

var server=http.createServer(function(req,res){
    console.log('request was made: '+ req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    /*var myObj={
        name:'Ryu',
        job:'Ninja',
        age: 29,

    };*/
    //var myReadStream=fs.createReadStream(__dirname + '/index.htm','utf8');
    //res.end(JSON.stringify(myObj));
     
    //myReadStream.pipe(res);

    //res.end('feed me popcorn');
    if(req.url==="/home" || req.url==="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/index.htm').pipe(res);
    }
    else if(req.url==='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/contact.htm').pipe(res);
    }
    else if(req.url==='/api/ninjas'){
        var ninjas=[{name:'ryu',age:29},{name:'yoshi',age:32}];
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(JSON.stringify(ninjas));
    }
    else
    {
        res.writeHead(404,{'Content-type':'text/html'});
        fs.createReadStream(__dirname+'/404.htm').pipe(res);
    }
});

server.listen(3000,'127.0.0.1');
console.log('yo dawgs,now listening to port 3000');













