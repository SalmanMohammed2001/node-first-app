const express=require('express')
const mongoose=require('mongoose')
const app=express();

mongoose.connect('mongodb://127.0.0.1:27017/customer_crud2').then(()=>{
    app.listen(3000,()=>{
        console.log('api started end running on port 3000')
    })
})
