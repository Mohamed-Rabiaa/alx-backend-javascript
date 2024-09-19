const request = require('request');
const { expect } = require('chai');

describe('Basic Integration Testing ', () => {
  it('Testing Get /', (done) => {
    request('http://localhost:7865', (err, res, body) => {
	expect(res.statusCode).to.be.equal(200);
	expect(body).to.be.equal('Welcome to the payment system');
	done();
      });
  });
});

describe('Testing the cart page', () => {
  it('id is a number', (done) => {
    request('http://localhost:7865/cart/123', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 123');
      done();
    });
  });
  
  it('id is not a number', (done) => {
    request('http://localhost:7865/cart/Not a Number', (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
