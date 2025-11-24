const express = require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("hi")
});

app.get('/tento',(req,res)=>{
    res.send("Hi Tento");
});

app.listen(port,()=>{
    console.log(`Listening to http://localhost:${port}`);
});