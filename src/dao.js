require("dotenv").config();            
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://admin:'+process.env.PASS+'@avi.j3vc0.mongodb.net/cars?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
            
const db=mongoose.connection;
            
module.exports=mongoose;
            
         
db.on('error', (err)=> { throw err }); 
                         
db.once('open',  (err,data)=> {
    console.log(`${db.name} db connected!`);         
});
            