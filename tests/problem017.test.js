import pkg from 'chai'
import { problem017 } from '../problems/problem017.js'
const { expect } = pkg

describe('Problem 017', function () {
  it('Should return 19 as the sum of all letters used to write numbers from 1 to 5', function () {
    expect(problem017([...Array(5 + 1).keys()].slice(1))).to.equal(19)
  })
  it('Should return 864 as the sum of all letters used to write numbers from 1 to 100', function () {
    expect(problem017([...Array(100 + 1).keys()].slice(1))).to.equal(864)
  })
  it('Should return 21124 as the sum of all letters used to write numbers from 1 to 1000', function () {
    expect(problem017([...Array(1000 + 1).keys()].slice(1))).to.equal(21124)
  })
})
