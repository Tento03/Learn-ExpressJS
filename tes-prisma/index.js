const express = require('express');
const routes = require('./routes/userRoutes');
const app=express();

app.use(express.json());
app.use('/users',routes);
app.listen(3000,()=>{
    console.log('hi');
})
