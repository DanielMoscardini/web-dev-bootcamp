const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/', (req, res) => {
  let number = req.body.number;
  if (number % 2 == 0) {
    res.send(`The number ${number} is even`);
  } else {
    res.send(`The number ${number} is odd`);
  }
});

app.listen(3000, () => console.log('Listening on port 3000'));
