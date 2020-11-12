import { expect } from 'chai'
import { problem014 } from '../src/problems/problem014'

describe('Problem 014', function () {
  it('Should return 20 as max number of terms in collatz sequence up until 10', function () {
    expect(problem014(10)).to.equal(9)
  })
  it('Should return 6 as max number of terms in collatz sequence up until 5', function () {
    expect(problem014(5)).to.equal(3)
  })
  it('Should return 97 as max number of terms in collatz sequence up until a hundred', function () {
    expect(problem014(100)).to.equal(97)
  })
  it('Should return 871 as max number of terms in collatz sequence up until a thousand', function () {
    expect(problem014(1e3)).to.equal(871)
  })
  it('Should return 6171 as max number of terms in collatz sequence up until 10 thousands', function () {
    expect(problem014(1e4)).to.equal(6171)
  })
  it('Should return 77031 as max number of terms in collatz sequence up until 100 thousands', function () {
    expect(problem014(1e5)).to.equal(77031)
  })
  it('[SOLUTION]Should return 837799 as max number of terms in collatz sequence up until 1 million', function () {
    const solution = problem014(1e6)
    expect(solution).to.equal(837799)
    console.log('Solution:', solution)
  })
})
