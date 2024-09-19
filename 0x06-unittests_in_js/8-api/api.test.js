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
