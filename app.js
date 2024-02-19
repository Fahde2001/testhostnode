const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/test', (req, res) => {
  res.send('Hello, Fahde!');
});
app.get('/oth', (req, res) => {
  res.send('Hello, othamne!');
});

app.listen(8080,() => {
  console.log(`Server listening on port`);
});
