const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('type === "SUM"', () => {

    it('Sum Test Case 1', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    
    it('Sum Test Case 2', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    
    it('Sum Test Case 3', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('Sum Test Case 4', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
    
    it('Sum Test Case 5', () => {
      expect(calculateNumber('SUM', 5.333333, 4.66666)).to.equal(10);
    });
    
    it('Sum Test Case 6', () => {
      expect(calculateNumber('SUM', 3.55555, 3.99999)).to.equal(8);
    });

    it('Sum Test Case 7', () => {
      expect(calculateNumber('SUM', -1.1, -2.2)).to.equal(-3);
    });

    it('Sum Test Case 8', () => {
      expect(calculateNumber('SUM', 1.1, -2.2)).to.equal(-1);
    });

    it('Sum Test Case 9', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    
  });

  describe('type === "SUBTRACT"', () => {
    it('subtract Test Case 1', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('subtract Test Case 2', () => {
      expect(calculateNumber('SUBTRACT', 4.5, 1.4)).to.equal(4);
    });

    it('subtract Test Case 3', () => {
      expect(calculateNumber('SUBTRACT', 1.0, 1.0)).to.equal(0);
    });
    
    it('subtract Test Case 4', () => {
      expect(calculateNumber('SUBTRACT', 1.0, 0)).to.equal(1);
    });

    it('subtract Test Case 5', () => {
      expect(calculateNumber('SUBTRACT', 0, 1.0)).to.equal(-1);
    });

    it('subtract Test Case 6', () => {
      expect(calculateNumber('SUBTRACT', -3.3, -4.6)).to.equal(2);
    });

    it('subtract Test Case 7', () => {
      expect(calculateNumber('SUBTRACT', -4, 2)).to.equal(-6);
    });

    it('subtract Test Case 8', () => {
      expect(calculateNumber('SUBTRACT', 2, -4)).to.equal(6);
    });

    it('subtract Test Case 9', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });  
  });

  describe('type === "DIVIDE"', () => {
    it('Divide Test Case 1', () => {
      expect(calculateNumber('DIVIDE', 10.2, 4.5)).to.equal(2);
    });

    it('Divide Test Case 2', () => {
      expect(calculateNumber('DIVIDE', 0, 5.5)).to.equal(0);
    });

    it('Divide Test Case 3', () => {
      expect(calculateNumber('DIVIDE', -20, -4)).to.equal(5);
    });

    it('Divide Test Case 4', () => {
      expect(calculateNumber('DIVIDE', -20, 4)).to.equal(-5);
    });

    it('Divide Test Case 5', () => {
      expect(calculateNumber('DIVIDE', 6.2, 0)).to.equal('Error');
     });
    
    it('Divide Test Case 6', () => {
      expect(calculateNumber('DIVIDE', 3.3, 2.5)).to.equal(1);
     });
    
    it('Divide Test Case 7', () => {
      expect(calculateNumber('DIVIDE', 2.6, 3.4)).to.equal(1);
    });

    it('Divide Test Case 8', () => {
      expect(calculateNumber('DIVIDE', 2.2, 2.2)).to.equal(1);
    });    
    
    it('Divide Test Case 9', () => {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });   
  });
});
