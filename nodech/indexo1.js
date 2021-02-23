const fs=require('fs');

//fs.mkdirSync('HELLO')
//fs.writeFileSync('HELLO/bio.txt',"My name is Aryamaan Pandey");
//fs.appendFileSync('HELLO/bio.txt'," plz subscribe to my channel");

//const data=fs.readFileSync("HELLO/bio.txt",'utf8');
//console.log(data);

fs.renameSync("HELLO/bio.txt","HELLO/a23.txt");

//fs.unlinkSync("HELLO/bio.txt");

fs.rmdir('HELLO');




