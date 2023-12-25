const Customer=require('../model/Customerschema')


const saveCustomer=(req,res)=>{
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
        if(result==null){
            res.status(404).json({status:false,message:'customer not found'})
        }else {
            res.status(200).json({status:true,data:result})
        }
    })
}


const updateCustomer=(req,res)=>{

}


const deleteCustomer=(req,res)=>{

}


const findAllCustomer=(req,res)=>{

}

