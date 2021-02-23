const os=require("os");
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

const freemem=os.freemem();
//console.log(freemem);
console.log(`${freemem/1024/1024/1024}`);//to convert into gb

const total=os.totalmem();
//console.log(freemem);
console.log(`${total/1024/1024/1024}`);//to convert into gb
