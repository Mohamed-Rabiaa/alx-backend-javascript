const express = require('express');
const app = express();
const port = 7865;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  return res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  return res.send({
    payment_methods: {
    credit_cards: true,
    paypal: false
    }
  });
});
  
app.post('/login', (req, res) => {
  const userName = req.body.userName;
  return res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
