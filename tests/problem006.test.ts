import { expect } from 'chai'
import { problem006 } from '../src/problems/problem006'

describe('Problem 006', function () {
  it('Should return 2640 as the difference between the Square of the Sum and Sum of squares of all' +
     'natural numbers from 1 thru 10.', function () {
    expect(problem006(10)).to.equal(2640)
  })
  it('Should return 41230 as the difference between the Square of the Sum and Sum of squares of all' +
     'natural numbers from 1 thru 20.', function () {
    expect(problem006(20)).to.equal(41230)
  })
  it('[SOLUTION]Should return 25164150 as the difference between the Square of the Sum and Sum of squares of all' +
     'natural numbers from 1 thru 100.', function () {
    const solution = problem006(100)
    expect(solution).to.equal(25164150)
    console.log('Solution:', solution)
  })
})
