import { expect } from 'chai'
import { problem004 } from '../src/problems/problem004'

describe('Problem 004', function () {
  it('Should return 906609 as the highest highest palindrome product of 3-digits number.', function () {
    expect(problem004(3)).to.equal(906609)
  })
  it('Should return 9 as the highest highest palindrome product of 1-digit number.', function () {
    expect(problem004(1)).to.equal(9)
  })
  it('Should return 9009 as the highest highest palindrome product of 2-digits number.', function () {
    expect(problem004(2)).to.equal(9009)
  })
})
