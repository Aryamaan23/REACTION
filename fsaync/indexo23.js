const fs=require('fs');

/*fs.writeFile('read.txt',"Today is awesome day!",(err) => { 
    if (err) { 
      console.log(err); 
    } 
  });*/

/*fs.appendFile('read.txt',"plz like and subscribe my channel",(err)=>{
    if(err)
    {
        console.log(err);
    }
});*/

fs.readFile('read.txt','utf8',(err,data)=>{
    
        console.log(data);
        
});





