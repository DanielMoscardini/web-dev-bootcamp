const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/signup.html`);
});

app.post('/', (req, res) => {
  let name = req.body.inputName;
  let lastName = req.body.inputLastName;
  let email = req.body.inputEmail;

  console.log(name);
  console.log(lastName);
  console.log(email);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
