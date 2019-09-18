var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send(`Hello Node!!`)
});

app.get('/info', (req, res) => {
    res.send(`Hi I am zameer`)
});

app.listen(4000, () => console.log(`express app listening now!`))