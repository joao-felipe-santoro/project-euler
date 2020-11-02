import pkg from 'chai'
import { problem009 } from '../problems/problem009.mjs'
const { expect } = pkg

describe('Problem 009', function () {
  it('Should return 60 as the product of the pythagorean triplet which sum is 12.', function () {
    expect(problem009(12)).to.equal(60)
  })
  it('Should return 31875000 as the product of the pythagorean triplet which sum is 1000.', function () {
    expect(problem009(1000)).to.equal(31875000)
  })
  it('Should return 2040000 as the product of the pythagorean triplet which sum is 400.', function () {
    expect(problem009(400)).to.equal(2040000)
  })
})
