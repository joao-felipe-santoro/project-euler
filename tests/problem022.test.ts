import { expect } from 'chai'
import { problem022 } from '../src/problems/problem022'
import names from '../src/data/names.json'

describe('Problem 022', function () {
  it('Should return 53 as the score of the name COLIN', function () {
    expect(problem022(['COLIN'])).to.equal(53)
  })
  it('Should return 159 as the score of the names COLIN, COLIN', function () {
    expect(problem022(['COLIN', 'COLIN'])).to.equal(159)
  })
  it('[SOLUTION]Should return 871198282 as the sum of the names scores', function () {
    const solution = problem022(names)
    expect(solution).to.equal(871198282)
    console.log('Solution:', solution)
  })
})
