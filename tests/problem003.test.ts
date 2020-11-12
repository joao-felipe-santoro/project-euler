import { expect } from 'chai'
import { problem003 } from '../src/problems/problem003'

describe('Problem 003', function () {
  it('Should return 29 as the highest prime factor of 13195.', function () {
    expect(problem003(13195)).to.equal(29)
  })
  it('[SOLUTION]Should return 6857 as the highest prime factor of 600851475143.', function () {
    const solution = problem003(600851475143)
    expect(solution).to.equal(6857)
    console.log('Solution:', solution)
  })
})
