const expect = require('chai').expect

const { problem007 } = require('../problems/problem007.js')

describe('Problem 007', function () {
  it('Should return 2 as the 1st prime.', function () {
    expect(problem007(1)).to.equal(2)
  })
  it('Should return 3 as the 2nd prime.', function () {
    expect(problem007(2)).to.equal(3)
  })
  it('Should return 5 as the 3rd prime.', function () {
    expect(problem007(3)).to.equal(5)
  })
  it('Should return 13 as the 6th prime.', function () {
    expect(problem007(6)).to.equal(13)
  })
  it('Should return 104743 as the 10.001th prime.', function () {
    expect(problem007(10001)).to.equal(104743)
  })
})
