exports.adminLogin=(req,res)=>{
    if( req.query.name=="admin" && req.query.pass=="123456" ){
        res.status(200).send(" admin login ");
    }
    else{
        res.status(200).send("invalid credentials");
    }
}