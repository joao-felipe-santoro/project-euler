import { expect } from 'chai'
import { problem036 } from '../src/problems/problem036'

describe('Problem 036', function () {
  it('Should return 25 as the sum of all palindromic numbers both in decimal and binary base', function () {
    expect(problem036(10)).to.equal(25)
  })
  it('Should return 157 as the sum of all palindromic numbers both in decimal and binary base', function () {
    expect(problem036(100)).to.equal(157)
  })
  it('[SOLUTION]Should return 212865 as the sum of all palindromic numbers both in decimal and binary base', function () {
    const solution = problem036(1000000)
    expect(solution).to.equal(872187)
    console.log('Solution:', solution)
  })
})
