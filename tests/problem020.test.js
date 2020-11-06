import pkg from 'chai'
import { problem020 } from '../problems/problem020.js'
const { expect } = pkg

describe('Problem 020', function () {
  it('Should return 27 as the sum of the digits in the number 10!', function () {
    expect(problem020(10n)).to.equal(27)
  })
  it('Should return 3 as the sum of the digits in the number 5!', function () {
    expect(problem020(5n)).to.equal(3)
  })
  it('Should return 9 as the sum of the digits in the number 6!', function () {
    expect(problem020(6n)).to.equal(9)
  })
  it('Should return 9 as the sum of the digits in the number 7!', function () {
    expect(problem020(7n)).to.equal(9)
  })
  it('Should return 9 as the sum of the digits in the number 8!', function () {
    expect(problem020(8n)).to.equal(9)
  })
  it('Should return 648 as the sum of the digits in the number 100!', function () {
    expect(problem020(100n)).to.equal(648)
  })
})
