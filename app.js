var express = require('express');

var app = express();

app.use(express.static('images'))

app.get('/', (req, res) => {
    res.sendFile(`views/index.html`, {'root': './'})
});

app.get('/info', (req, res) => {
    res.sendFile(`views/info.html`, {'root': './'})
});

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  });

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Internal server error!')
})


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`express app listening now on ${PORT}!`))