import pkg from 'chai'
import { problem003 } from '../problems/problem003.js'
const { expect } = pkg

describe('Problem 003', function () {
  it('Should return 29 as the highest prime factor of 13195.', function () {
    expect(problem003(13195)).to.equal(29)
  })
  it('Should return 6857 as the highest prime factor of 600851475143.', function () {
    expect(problem003(600851475143)).to.equal(6857)
  })
})
