const fs=require("fs");
const bioData={
    name:"Aryamaan",
    age:26,
    channel:"Aryamaan23",
};

//console.log(bioData.channel);
//console.log(bioData.name);

const jsonData=JSON.stringify(bioData);
console.log(jsonData);
//console.log(jsonData);

//const objeData=JSON.parse(jsonData);
//console.log(objeData);

//Task for today
/*
1.convert to JSON
2.durse file me add kardena
3. readfile
4.again convert back to js obj ori
5. console.log
*/

/*fs.writeFile('json1.json',jsonData,(err)=>{
    console.log("done");

})*/

fs.readFile('jso1.json',"utf-8",(err,data)=>{
   //console.log(data);
   const originalData=JSON.parse(data);
   console.log(originalData);
});
