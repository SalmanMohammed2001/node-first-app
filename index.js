const express=require('express')
const bodyParser=require('body-parser')
require('dotenv').config()
const mongoose=require('mongoose')
const app=express();


app.use(bodyParser.urlencoded({extends:false}))
app.use(bodyParser.json())


const port=process.env.SERVER_PORT

const customerRoute=require('./route/CustomerRoute')

mongoose.connect('mongodb://127.0.0.1:27017/customer_mongo').then(()=>{

    app.listen(port,()=>{
        console.log(`server port running ${port}`)
    })
})

app.use("/api/v1/customers",customerRoute)
