const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment.js');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('Should Stubs the function Utils.calculateNumber to always return the same number 10', () => {
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber');

    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    stub.calledWith('SUM', 100, 20);

    expect(spy.calledWith('The total is: 10')).to.be.true;

    stub.restore();
    spy.restore();
  });
});
