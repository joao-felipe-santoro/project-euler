import { expect } from 'chai'
import { problem020 } from '../src/problems/problem020'

describe('Problem 020', function () {
  it('Should return 27 as the sum of the digits in the number 10!', function () {
    expect(problem020(BigInt(10))).to.equal(27)
  })
  it('Should return 3 as the sum of the digits in the number 5!', function () {
    expect(problem020(BigInt(5))).to.equal(3)
  })
  it('Should return 9 as the sum of the digits in the number 6!', function () {
    expect(problem020(BigInt(6))).to.equal(9)
  })
  it('Should return 9 as the sum of the digits in the number 7!', function () {
    expect(problem020(BigInt(7))).to.equal(9)
  })
  it('Should return 9 as the sum of the digits in the number 8!', function () {
    expect(problem020(BigInt(8))).to.equal(9)
  })
  it('[SOLUTION]Should return 648 as the sum of the digits in the number 100!', function () {
    const solution = problem020(BigInt(100))
    expect(solution).to.equal(648)
    console.log('Solution:', solution)
  })
})
