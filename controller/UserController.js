const UserSchema=require('../model/UserSchema')
const bcrypt=require('bcrypt')
const e = require("express");

const signup= async (req,res)=>{
    UserSchema.findOne({username:req.body.username}).then((result)=>{

        console.log(req.body)

        bcrypt.hash(req.body.password, 10, function(err, hash) {
            // Store hash in your password DB.

            if(err){
                res.status(500).json({message:'something went wrong'})
            }

            if(result==null){
                console.log(req.body)
                const user= UserSchema({
                    username:req.body.username,
                    fullName:req.body.fullName,
                    password:hash
                });
                user.save().then(saveData=>{
                    res.status(200).json({message:'user saved!',data:saveData})
                }).catch(err=>{
                    res.status(500).json(err)
                })
            }else {
                res.status(409).json({message:'email already exist'})
            }

        });




    }).catch(error=>{
        res.status(500).json(error)
    })
}
const login= async (req,res)=>{
    UserSchema.findOne({username:req.body.username}).then((selectedUser)=>{
        if(selectedUser===null){
            return res.status(404).json({message:'user name not found!'})
        }else {

            bcrypt.compare(req.body.password, selectedUser.password, function(err, result) {

                if(result){
                    res.status(200).json({message:'login',data:result})
                }else {
                    return res.status(401).json({message:'password InCrate'})
                }
            });

        }
    })
}


module.exports={
    login,signup
}