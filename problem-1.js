const express = require("express");
const fs = require("fs");

const app = express();
const port = '3000';
 
app.get('/student/add',(req,res) =>{
  
    const newObject = {
        studentFirstName:req.query.studentFirstName,
        collegeName:req.query.collegeName,
        location:req.query.location
    } 
    
        const JSON_Data = JSON.stringify(newObject,null,2);
 
    
        fs.appendFileSync('./problem-1.json',"\n" + JSON_Data,(err) =>{
        
        if(err){
            return err;
        } 

  });

        const resultdata = {
            "result":"Success"
        } 
        const JSON_response = JSON.stringify(resultdata); 
        res.end(JSON_response);

});

app.get('/student/getDetails',(req,res) =>{
    fs.readFile('./problem-1.json',"utf-8",(err,data) =>{
        
        if(err){
            return err;
        }

        res.end(data);
  });
});

//Server
app.listen(port, () =>{
    console.log("Server Running")
})
