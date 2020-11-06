import pkg from 'chai'
import { problem006 } from '../problems/problem006.js'
const { expect } = pkg

describe('Problem 006', function () {
  it('Should return 2640 as the difference between the Square of the Sum and Sum of squares of all' +
     'natural numbers from 1 thru 10.', function () {
    expect(problem006(10)).to.equal(2640)
  })
  it('Should return 41230 as the difference between the Square of the Sum and Sum of squares of all' +
     'natural numbers from 1 thru 20.', function () {
    expect(problem006(20)).to.equal(41230)
  })
  it('Should return 25164150 as the difference between the Square of the Sum and Sum of squares of all' +
     'natural numbers from 1 thru 100.', function () {
    expect(problem006(100)).to.equal(25164150)
  })
})
