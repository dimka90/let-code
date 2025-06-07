const express=require('express')
const db= require('./models')
const staffRouter=require('./routes/staff')
require('dotenv').config()
const app=express()
const PORT=process.env.PORT || '3000'
app.use(express.json())
app.use("/staff", staffRouter);
app.listen(PORT, ()=>{
    console.log(PORT);
    
    console.log("Welcome to 127.0.0.1")
})