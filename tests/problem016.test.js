import pkg from 'chai'
import { problem016 } from '../problems/problem016.js'
const { expect } = pkg

describe('Problem 016', function () {
  it('Should return 26 as the sum of the digits in the result of 2 to the power of 15', function () {
    expect(problem016(2n, 15n)).to.equal('26')
  })
  it('Should return XXX as the sum of the digits in the result of 2 to the power of 1000', function () {
    expect(problem016(2n, 1000n)).to.equal('1366')
  })
})
