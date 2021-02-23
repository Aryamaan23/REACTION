console.log("welcome to my house :)");
const name="thapa";

console.log(name);

const fs=require('fs');
//creating a new file
fs.writeFileSync('read.txt',"welcome to my house");

fs.writeFileSync('read.txt',"IAS Welcome to my house");

fs.appendFileSync('read.txt'," How are you,I am fine");

fs.readFileSync('read.txt');

const buf_data=fs.readFileSync('read.txt','utf8');
console.log(buf_data);

org_data=buf_data.toString();
console.log(org_data);

fs.renameSync('read.txt','hello.txt');

//CRUD
//create
//update
//read
//delete

