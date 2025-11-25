const express = require('express');
const app=express();
const port=3000;
app.use(express.json());

const users=[];

app.post('/register',(req,res)=>{
    const { username,password }=req.body

    if (!username | !password) {
        return res.status(400).json({message:"Username dan Password harus diisi"})
    }

    const exist=users.find(u => u.username == username);
    if (exist) {
        return res.status(400).json({message:"Username udah terdaftar"})
    }

    users.push({username,password});
    res.status(201).json({message:"Registrasi Berhasil",user:{username}})
});

app.post('/login',(req,res)=>{
    const {username,password} = req.body
    const user=users.find(u => u.username === username && u.password === password );

    if(user){
        res.json({message:"Login Berhasil",user: {username:user.username}})
    }
    else{
        res.status(401).json({message:"Username atau Password salah"})
    }
})

app.listen(port,()=>{
    console.log(`Server Running at https://localhost:${port}`);
});