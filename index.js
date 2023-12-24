const express=require('express')
const mongoose=require('mongoose')
const app=express();

require('dotenv').config();

const port=process.env.SERVER_PORT || 3000

mongoose.connect('mongodb://127.0.0.1:27017/customer_crud2').then(()=>{
    app.listen(port,()=>{
        console.log('api started end running on port 3000')
    })
})

app.use("/",(req,res,next)=>{
    res.send('<h1>salman</h1')
})