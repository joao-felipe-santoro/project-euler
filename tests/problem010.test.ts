import { expect } from 'chai'
import { problem010 } from '../src/problems/problem010'

describe('Problem 010', function () {
  it('Should return 17 as the sum of all primes below 10.', function () {
    expect(problem010(10)).to.equal(17)
  })
  it('Should return 142913828922 as the sum of all primes below 2000000.', function () {
    expect(problem010(2000000)).to.equal(142913828922)
  })
})
