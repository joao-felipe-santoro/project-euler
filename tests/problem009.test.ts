import { expect } from 'chai'
import { problem009 } from '../src/problems/problem009'

describe('Problem 009', function () {
  it('Should return 60 as the product of the pythagorean triplet which sum is 12.', function () {
    expect(problem009(12)).to.equal(60)
  })
  it('Should return 2040000 as the product of the pythagorean triplet which sum is 400.', function () {
    expect(problem009(400)).to.equal(2040000)
  })
  it('[SOLUTION]Should return 31875000 as the product of the pythagorean triplet which sum is 1000.', function () {
    const solution = problem009(1000)
    expect(solution).to.equal(31875000)
    console.log('Solution:', solution)
  })
})
