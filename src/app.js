require("dotenv").config();
const express=require("express");
const path=require("path");
const nunjucks=require("nunjucks");
const app=express();
const admin=require('./routes/admin');
const api=require("./controllers/api");

const db=require('./dao');
const car=require("./models/cars");

app.use(express.static(path.resolve('src/public')));
app.use("/admin",admin);



// configure
nunjucks.configure(path.resolve('src/public'),{
    express:app,
    autoscape:true,
    noCache:false,
    watch:true
}); 

app.get("/",(req,res)=>{
    res.render('home.html',{});
});
app.get("/api",api.getApi);


app.listen(process.env.PORT,()=>{
    console.log(`app running at http://127.0.0.1:${process.env.PORT}`);
});
