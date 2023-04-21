const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/signup.html`);
});

app.post('/', (req, res) => {
  const name = req.body.inputName;
  const lastName = req.body.inputLastName;
  const email = req.body.inputEmail;

  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: name,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = 'https://us17.api.mailchimp.com/3.0/lists/listId';

  const options = {
    method: 'POST',
    auth: 'daniel1:APIKey'
  };

  const request = https.request(url, options, response => {
    if (response.statusCode >= 200 && response.statusCode <= 299) {
      res.sendFile(`${__dirname}/success.html`);
    } else {
      res.sendFile(`${__dirname}/failure.html`);
    }

    response.on('data', data => {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});

app.post('/failure', (req, res) => {
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
