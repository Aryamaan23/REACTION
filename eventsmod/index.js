

const fs = require('fs');
const http=require('http');



const EventEmitter=require("events");
const event=new EventEmitter();

event.on('saymyname',()=>{
    console.log('Your name is vinod');
});

event.on('saymyname',()=>{
    console.log('Your name is Bob');
});

event.on('saymyname',()=>{
    console.log('Your name is Aryamaan');
});

event.emit('saymyname');

event.on('checkPage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit("checkPage",200,"ok");

