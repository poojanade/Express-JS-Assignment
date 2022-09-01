const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const data = require("./data");

// app.get("/home",(req,res)=>{
//     res.send("detail");
// });

app.get("/",(req,res)=>{
    res.json(data);
});

app.get("/student",(req,res)=>{
    res.send("student detail");
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});