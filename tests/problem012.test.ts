import { expect } from 'chai'
import { problem012 } from '../src/problems/problem012'

describe('Problem 012', function () {
  it('Should return 28 as the first triangle number with over 5 divisors', function () {
    expect(problem012(5)).to.equal(28)
  })
  it('Should return 3 as the first triangle number with over 1 divisors', function () {
    expect(problem012(1)).to.equal(3)
  })
  it('Should return 6 as the first triangle number with over 3 divisors', function () {
    expect(problem012(3)).to.equal(6)
  })
  it('[SOLUTION]Should return 76576500 as the first triangle number with over 500 divisors', function () {
    const solution = problem012(500)
    expect(solution).to.equal(76576500)
    console.log('Solution:', solution)
  })
})
