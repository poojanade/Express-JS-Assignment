const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const data = require("./data");

app.get("/student/studentList",(req,res)=>{
    res.json(data);
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});