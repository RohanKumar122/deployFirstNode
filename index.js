const express =require("express");
const cors =require("cors");
const app  =express();
// const port =3020;
const port =process.env.PORT ||3000;
const apiData =require("./data.json");

app.use(cors());

app.get("/",(req,res) =>{
    res.send("Hello I am live")
});

app.get("/services",(req,res)=>{
    res.send(apiData);
})

app.listen(port,()=>{
    console.log("I am live again!!");
});