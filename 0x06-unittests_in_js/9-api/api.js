const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
  return res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  return res.send(`Payment methods for cart ${id}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
