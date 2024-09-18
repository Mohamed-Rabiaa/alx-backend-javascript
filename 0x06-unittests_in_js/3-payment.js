const Utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  return `The total is: ${total}`;
}

module.exports = sendPaymentRequestToApi;
