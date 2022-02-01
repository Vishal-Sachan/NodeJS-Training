const express = require("express");
const mongoose = require("mongoose");
const port=process.env.PORT || 3000;
const app=express();
const cars=require('./cars')

mongoose.connect("mongodb://localhost:27017/Automobiles",{})
.then(()=>{
    console.log("Database Connected");
})
.catch(()=>{
    console.log("Database Failed");
})
cars.exists()
cars.find({name:"BMW"},(err,data)=>{
    if(err){
        console.log("can't fetch");
    }
    else{
        console.log(data);
    }
}) 

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to MongoDB Tutorial</h1>")
})

app.listen(port,()=>{
    console.log(`Listening at ${port}...`);
})