
const express=require("express");
const router=express.Router();
const ctrl=require("../controllers/admin.controller");
    
router.get('/',(req,res)=>{
    res.status(200).send("hi admin");
});

router.get('/login',ctrl.adminLogin);

    
module.exports=router;