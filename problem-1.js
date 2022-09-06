const express = require('express');
const app = express();
const data = require("./problem-1.json");

app.get('/student/getdetail', (req, res) => {
    res.send(data);
});

app.listen(5000);
