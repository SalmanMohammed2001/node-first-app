
const customerController=require('../controller/CustomerController')


const express=require('express');

const router=express.Router();

router.post("/save-customer",customerController.saveCustomer);
router.get("/get-customer/:nic",customerController.findCustomer);
router.put("/update-customer", customerController.updateCustomer);
router.delete("/delete-customer",customerController.deleteCustomer);
router.get("/get-all-customer",customerController.findAllCustomer);



module.exports=router;

