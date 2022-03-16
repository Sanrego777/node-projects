const express = require('express');
const app = express();

const host = 'localhost';
const port = 8000;

app.get('/index', (req, res, next) => {
  req.url = '/home';
  next();
});

app.get('/home', (req, res) => {
  res.setHeader('content-type', 'application/json');
  res.send(JSON.stringify({
    PathRequested: req.originalUrl,
    PathRewroteTo: req.url,
    Messgae: `successfully re-wrote URL from ${req.originalUrl} to ${req.url} without changing browser URL`,
    Source: "using express server"
  }));
});

app.use((req, res) => {
  if (req.url === '/favicon.ico') {
    return res.sendStatus(204);
  }
  res.status(404).send('Not Found!');
});

app.listen(port, host, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on http://${host}:${port}/index`);
});