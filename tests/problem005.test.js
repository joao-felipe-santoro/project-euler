const expect = require('chai').expect

const { problem005 } = require('../problems/problem005.js')

describe('Problem 005', function () {
  it('Should return 2520 as the minimum multiplier of numbers from 1 thru 10.', function () {
    expect(problem005([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.equal(2520)
  })
  it('Should return 9360 as the minimum multiplier of 10, 26 and 144.', function () {
    expect(problem005([10, 26, 144])).to.equal(9360)
  })
  it('Should return 232792560 as the minimum multiplier of numbers from 1 thru 20.', function () {
    expect(problem005([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])).to.equal(232792560)
  })
})
