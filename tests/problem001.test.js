const expect = require('chai').expect;

const {problem001} = require('../problems/problem001.js');

describe('Problem 001', function() {
    it('Should return 233168 as the sum of all multiples of 3 or 5 between 1 and 1000', function() {
        expect(problem001(1000)).to.equal(233168);
    });
});