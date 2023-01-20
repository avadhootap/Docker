const express=require('express')
const app=express();
app.get('/',(req,resp)=>{
resp.sendFile('Public/Index.html',{root:__dirname})
});
app.get('/index',(req,resp)=>{
resp.sendFile('Public/Index1.html',{root:__dirname})
});
console.log('server started at 8080');
app.listen(8080);