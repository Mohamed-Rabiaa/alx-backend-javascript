const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});

module.exports = app;
