const expect = require('chai').expect;

const {problem002} = require('../problems/problem002.js');

describe('Problem 002', function() {
    it('Should return 4613732 as the sum of all even Fibonacci terms lower than 4 millions', function() {
        expect(problem002(32)).to.equal(4613732);
    });
});