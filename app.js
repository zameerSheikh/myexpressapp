var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send(`Hello Node!!`)
});

app.get('/info', (req, res) => {
    res.send(`Hi I am zameer`)
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`express app listening now on ${PORT}!`))