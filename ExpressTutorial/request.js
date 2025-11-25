const express = require('express');
const app=express();
const port=3000;

app.use(express.json());

app.get('/search',(req,res)=>{
    res.send(req.query)
});

app.get('/user/:id',(req,res)=>{
    res.send(req.params)
})

app.post('/login',(req,res)=>{
    res.json(req.body)
})

app.get('/header',(req,res)=>{
    res.send(req.headers)
})

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
})