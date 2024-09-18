const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment.js');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM and the correct arguments', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.callCount).to.be.equal(1);

    spy.restore();
  });
});
