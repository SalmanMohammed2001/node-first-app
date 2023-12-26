const UserSchema=require('../model/UserSchema')
const e = require("express");

const signup= async (req,res)=>{
    UserSchema.findOne({username:req.body.username}).then((result)=>{

        console.log(req.body)

       if(result==null){
           console.log(req.body)
            const user= UserSchema({
                username:req.body.username,
                fullName:req.body.fullName,
                password:req.body.password
            });
            user.save().then(saveData=>{
                res.status(200).json({message:'user saved!',data:saveData})
            }).catch(err=>{
                res.status(500).json(err)
            })
        }else {
            res.status(409).json({message:'email already exist'})
        }

    }).catch(error=>{
        res.status(500).json(error)
    })
}
const login= async (req,res)=>{}


module.exports={
    login,signup
}