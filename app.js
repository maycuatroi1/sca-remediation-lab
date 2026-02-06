const express = require('express');
const _ = require('lodash');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const greeting = _.capitalize('hello world');
  res.send(greeting);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
