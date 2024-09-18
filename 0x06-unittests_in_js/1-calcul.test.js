const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('type === "SUM"', () => {

    it('Sum Test Case 1', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
    
    it('Sum Test Case 2', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });
    
    it('Sum Test Case 3', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('Sum Test Case 4', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    
    it('Sum Test Case 5', () => {
    assert.strictEqual(calculateNumber('SUM', 5.333333, 4.66666), 10);
    });
    
    it('Sum Test Case 6', () => {
    assert.strictEqual(calculateNumber('SUM', 3.55555, 3.99999), 8);
    });

    it('Sum Test Case 7', () => {
      assert.strictEqual(calculateNumber('SUM', -1.1, -2.2), -3);
    });

    it('Sum Test Case 8', () => {
      assert.strictEqual(calculateNumber('SUM', 1.1, -2.2), -1);
    });

    it('Sum Test Case 9', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('type === "SUBTRACT"', () => {
    it('subtract Test Case 1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('subtract Test Case 2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 1.4), 4);
    });

    it('subtract Test Case 3', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 1.0), 0);
    });
    
    it('subtract Test Case 4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 0), 1);
    });

    it('subtract Test Case 5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 1.0), -1);
    });

    it('subtract Test Case 6', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3.3, -4.6), 2);
    });

    it('subtract Test Case 7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -4, 2), -6);
    });

    it('subtract Test Case 8', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, -4), 6);
    });

    it('subtract Test Case 9', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
    
  });

  describe('type === "DIVIDE"', () => {
    it('Divide Test Case 1', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10.2, 4.5), 2);
    });

    it('Divide Test Case 2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 5.5), 0);
    });

    it('Divide Test Case 3', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -20, -4), 5);
    });

    it('Divide Test Case 4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -20, 4), -5);
    });

    it('Divide Test Case 5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.2, 0), 'Error');
     });
    
    it('Divide Test Case 6', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.3, 2.5), 1);
     });
    
    it('Divide Test Case 7', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.4), 1);
    });

    it('Divide Test Case 8', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.2, 1.8), 1);
    });    
    
    it('Divide Test Case 9', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });   
  });
});
