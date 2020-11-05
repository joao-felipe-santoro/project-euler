import pkg from 'chai'
import { problem014 } from '../problems/problem014.mjs'
const { expect } = pkg

describe('Problem 014', function () {
  it('Should return 20 as max number of terms in collatz sequence up until 10', function () {
    expect(problem014(10)).to.equal(9)
  })
  it('Should return 6 as max number of terms in collatz sequence up until 5', function () {
    expect(problem014(5)).to.equal(3)
  })
  it('Should return XX as max number of terms in collatz sequence up until a hundred', function () {
    expect(problem014(100)).to.equal(97)
  })
  it('Should return XX as max number of terms in collatz sequence up until a thousand', function () {
    expect(problem014(1000)).to.equal(871)
  })
  it('Should return XX as max number of terms in collatz sequence up until 10 thousands', function () {
    expect(problem014(10000)).to.equal(6171)
  })
  it('Should return XX as max number of terms in collatz sequence up until 100 thousands', function () {
    expect(problem014(100000)).to.equal(77031)
  })
  it('Should return XX as max number of terms in collatz sequence up until 1 million', function () {
    expect(problem014(1000000)).to.equal(837799)
  })
})
