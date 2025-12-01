require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app=express();
app.use(cors());
app.use(express.json());
app.use('/users',require('./routes/userRoutes'));

app.get('/',(req,res)=>{
    res.send('ok');
});

app.listen(process.env.PORT,()=>{
    console.log('mysql connected');
})