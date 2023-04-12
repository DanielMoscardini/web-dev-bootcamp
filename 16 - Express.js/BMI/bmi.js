const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/', (req, res) => {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let bmi = (weight / (height * height)) * 10000;
  res.send(`Your BMI is: ${bmi.toFixed(2)}`);
});

app.listen(3000, () => console.log('listen on port 3000'));
