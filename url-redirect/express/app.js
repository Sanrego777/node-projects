const express = require('express');
const app = express();

const host = 'localhost';
const port = 3000;


app.get('/', (req, res, next) => {
  res.redirect('/home');
  next();
});

app.get('/home', function (req, res) {
  res.send("Redirected to Home Page | using express server");
});

app.listen(port, host, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on http://${host}:${port}`);
});