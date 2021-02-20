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

var http=require('http');

/*var server=http.createServer(function(req,res){
    console.log('request was made: '+ req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hey Ninjas!');
});

server.listen(3000,'127.0.0.1');
console.log('yo dawgs,now listening to port 3000');*/

var fs=require('fs');

var myReadStream=fs.createReadStream(__dirname + '/readme.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data',function(chunk){
    console.log('New chunk received');
    myWriteStream.write(chunk);
    //console.log(chunk);
});












