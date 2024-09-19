const request = require('request');
const { expect } = require('chai');
const APPURL = 'http://localhost:7865';

describe('Basic Integration Testing ', () => {
  it('Testing Get /', (done) => {
    request(APPURL, (err, res, body) => {
	expect(res.statusCode).to.be.equal(200);
	expect(body).to.be.equal('Welcome to the payment system');
	done();
      });
  });
});

describe('Testing the cart page', () => {
  it('id is a number', (done) => {
    request(`${APPURL}/cart/123`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 123');
      done();
    });
  });
  
  it('id is not a number', (done) => {
    request(`${APPURL}/cart/Not a Number`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});

describe('Testing POST /login', () => {
  it('should respond with a welcome message', (done) => {
    request({
      url: `${APPURL}/login`,
      method: 'POST',
      json: { userName: 'Mohamed' }
    }, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Mohamed');
      done();
    });
  });
});

describe('Testing GET /available_payments', () => {
  it('should return the correct payment methods', (done) => {
    request(`${APPURL}/available_payments`, (err, res, body) => {
      const availablePayments = {
	payment_methods: {
	  credit_cards: true,
	  paypal: false
	}
      };
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.deep.equal(availablePayments);
      done();
    });
  });
});
      
