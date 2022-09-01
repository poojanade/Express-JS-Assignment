const express = require('express');
const app = express();
const data = require("./data.json");

app.get('/student/getdetail', (req, res) => {
    res.send(data);
});

// const port = 5000;
app.listen(5000);