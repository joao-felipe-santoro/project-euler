import pkg from 'chai'
import { fibonacci } from '../helper/fibonacci.mjs'
const { expect } = pkg

describe('Fibonacci', function () {
  it('Should return 1 as value for 1st term', function () {
    expect(fibonacci(1)).to.equal(2)
  })
  it('Should return 3 as value for 2nd term', function () {
    expect(fibonacci(2)).to.equal(3)
  })
  it('Should return 5 as value for 3rd term', function () {
    expect(fibonacci(3)).to.equal(5)
  })
  it('Should return 8 as value for 4th term', function () {
    expect(fibonacci(4)).to.equal(8)
  })
})
