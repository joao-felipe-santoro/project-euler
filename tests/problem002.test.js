const expect = require('chai').expect

const { problem002 } = require('../problems/problem002.js')

describe('Problem 002', function () {
  it('Should return 44 as the sum of the even Fibonacci terms up until 10th term.', function () {
    expect(problem002(10)).to.equal(44)
  })
  it('Should return 4613732 as the sum of all even Fibonacci terms that does not exceed 4 millions.', function () {
    expect(problem002(32)).to.equal(4613732)
  })
})
