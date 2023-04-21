const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/', (req, res) => {
  const city = req.body.cityName;
  const apiKey = '3edac1b26326208c054814e5c46dbce7';
  const units = 'metric';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=${units}`;

  https.get(url, response => {
    console.log(response.statusCode);

    response.on('data', data => {
      const weatherData = JSON.parse(data);
      const weatherTemp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const weatherIcon = weatherData.weather[0].icon;
      const watherImgUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

      res.send(`
        <h1>The temperature in ${city} is ${weatherTemp} degrees Celsius </h1>

        <p>The weather is currently ${weatherDescription}</p>

        <img src="${watherImgUrl}">

      `);
    });
  });
});

app.listen(3000, () => console.log('Listening on port 3000'));
