const Customer=require('../model/Customerschema')


const saveCustomer=(req,res)=>{
    console.log(req.body)
    const tempCustomer=new Customer({
            nic:req.body.nic,
            name:req.body.name,
            address:req.body.address,
            salary:req.body.salary,
    });
    tempCustomer.save().then((result)=>{
        res.status(200).json({status:true,message:'customer saved!',data:result})
    }).catch((error)=>{
        res.status(500).json(error)
    })
}
const findCustomer=(req,res)=>{
        Customer.findOne({nic:req.params.nic}).then((result)=>{
            if(result===null){
                res.status(200).json({status:false,message:'customer not found'})
            }else{
                res.status(200).json({status:true,message:'customer details',data:result})
            }
        }).catch(error=>{
        res.status(500).json({status:false,message:"Try Again",data:error})
    })


}


const updateCustomer=(req,res)=>{
    Customer.updateOne({nic:req.headers.nic},{
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary,


    }).then(result=>{
        if(result.modifiedCount>0){
            res.status(201).json({message:'customer updated',data:result})
        }else{
            res.status(201).json({status:false,message:'Try again'})
        }

    }).catch(error=>{
        res.status(500).json(error)
    })
}


const deleteCustomer=(req,res)=> {
    console.log({nic: req.headers.nic})
       Customer.deleteOne({nic:req.headers.nic}).then((result)=>{


           if(result.deletedCount>0){
               res.status(200).json({status:true,message:"customer delete"})
           }else{
               res.status(400).json({status:false,message:'Try Again'})
           }


       }).catch(error=>{
           res.status(500).json(error)
       })
}



const findAllCustomer=(req,res)=>{

    Customer.find().then(result=>{
        res.status(200).json({status:true,data:result})
    }).catch(error=>{
        res.status(500).json(error)
    }).catch(error=>{
        res.status(500).json(error)
    })
}

module.exports={
    saveCustomer,
    findCustomer,
    findAllCustomer,
    updateCustomer,
    deleteCustomer
}
