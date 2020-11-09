import { expect } from 'chai'
import { problem001 } from '../src/problems/problem001'

describe('Problem 001', function () {
  it('Should return 23 as the sum of all multiples of 3 or 5 between 1 and 10', function () {
    expect(problem001(10)).to.equal(23)
  })
  it('Should return 233168 as the sum of all multiples of 3 or 5 between 1 and 1000', function () {
    expect(problem001(1000)).to.equal(233168)
  })
})
