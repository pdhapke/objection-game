'use strict';

const express = require('express');
const env = require('dotenv').config({path: '../.env'});

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/api', (req, res) => {
  res.send('Hello World from the proxy');
});

app.listen(process.env.apiPort, process.env.Host);
console.log(`Running on http://${process.env.Host}:${process.env.apiPort}`);
