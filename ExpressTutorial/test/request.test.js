const request = require('supertest');
const express = require('express');
const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.send("Hello Tento")
});

test("Test Express JS",async()=>{
    const response=await request(app).get("/");
    expect(response.text).toBe("Hello Tento")
});