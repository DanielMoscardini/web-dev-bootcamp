const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/contact', (req, res) => {
  res.send('contact me: moscardinibdaniel@gmail.com');
});

app.get('/about', (req, res) => {
  res.send(
    'My name is Daniel Moscardini, i am 22 years old and i live in Brazil'
  );
});

app.get('/hobbies', (req, res) => {
  res.send('<ul> <li>Games</li> <li>Coding</li> <li>Chilling</li> </ul>');
});

app.listen(3000, () => console.log('server started on port 3000'));
