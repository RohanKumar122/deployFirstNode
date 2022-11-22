const express =require("express");
const cors =require("cors");
const path = require('path')
const app  =express();


//Absolute path and relative path .....we always use absolute

// console.log(path.join(__dirname,"../public"));



const staticPath =path.join(__dirname,'../HEROKUHOST/public/');

//buitin middleware
app.use(express.static(staticPath));
// const port =3020;
const port =process.env.PORT ||3000;
const apiData =require("./public/data.json");

app.use(cors());

app.get("/",(req,res) =>{
    res.sendFile(staticPath)
});
console.log(staticPath);

app.get("/services",(req,res)=>{
    res.send(apiData);
})


app.listen(port,()=>{
    console.log("I am live again!!");
});