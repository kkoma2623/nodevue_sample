const express = require('express');
const app = express(),
    testJson = require('./test/test.json');

app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.send("Hello NodeJS!!");
    res.send(testJson)
});

const server = app.listen(7000, function(){
    console.log("Express's started on port 7000");
});