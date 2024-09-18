const sendPaymentRequestToAPI = require('./5-payment.js');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Test Suit', () => {
  let spy = null;
  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });
  
  afterEach(() => {
    spy.restore();
  });

  it('Test Case 1', () => {	       
    sendPaymentRequestToAPI(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  it('Test Case 2', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
