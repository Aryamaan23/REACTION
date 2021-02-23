const fs=require('fs');
/*fs.mkdir('toronto',(err)=>{
    console.log("folder created");
});*/

/*fs.writeFile('./toronto/bio.txt','my name is aryamaan pandey',(err)=>{
    console.log('files created');
});*/

/*fs.appendFile('./toronto/bio.txt', 'please help me!!!',(err)=>{
    console.log('Data appended');
});*/

/*fs.readFile("./toronto/bio.txt",'utf-8',(err,data)=>{
    console.log(data);
});*/

/*fs.rename('./toronto/bio.txt',"./toronto/MyBIO.txt",(err)=>{
    console.log("rename done");
});*/

/*fs.unlink('./toronto/MYBIO.txt',(err)=>{
    console.log("file deleted");
});*/

fs.rmdir('./toronto',(err)=>{
    console.log('folder deleted');
});
