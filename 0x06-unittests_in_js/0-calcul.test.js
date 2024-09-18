const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('Test Case 1', () => {
    assert(calculateNumber(1, 3), 4);
  });

  it('Test Case 2', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('Test Case 3', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('Test Case 4', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('Test Case 5', () => {
    assert.strictEqual(calculateNumber(5.333333, 4.66666), 10);
  });

  it('Test Case 6', () => {
    assert.strictEqual(calculateNumber(3.55555, 3.99999), 8);
  });

  it('Test Case 7', () => {
    assert.strictEqual(calculateNumber(-1.1, -2.2), -3);
  });

  it('Test Case 8', () => {
    assert.strictEqual(calculateNumber(1.1, -2.2), -1);
  });
  
  it('Test Case 9', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
