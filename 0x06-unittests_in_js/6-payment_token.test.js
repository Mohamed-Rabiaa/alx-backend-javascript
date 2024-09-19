const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
  it('Testing the result of getPaymentTokenFromAPI(true)', (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.deep.equal({data: 'Successful response from the API' });
      done();
    });
  });
});
